import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../config';

const UserSchema = new mongoose.Schema({
    fullname: String,
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    avatar: String,
    salt: String,
    password: String
}, { timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.validPassword = function (password) {
    return this.password === crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.setImage = function (imageFile) {
    this.avatar = config.store.image.user + imageFile;
};

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        fullname: this.fullname,
        username: this.username,
        email: this.email,
        avatar: this.avatar,
        token: this.generateJWT()
    };
};

mongoose.model('User', UserSchema);