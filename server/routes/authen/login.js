import express from 'express';
import mongoose from 'mongoose';
import jwt from 'express-jwt';
import passport from 'passport';

var User = mongoose.model('User');

const login = express.Router();

login.post('/login', (req, res, next) => {
    if (!req.body.username) {
        return res.status(422).json({ username: "Username can't be blank" });
    }

    if (!req.body.password) {
        return res.status(422).json({ password: "Email can't be blank" });
    }

    passport.authenticate('local', { session: false }, function (err, user, info) {
        if (err) { return next(err); }

        if (user) {
            user.token = user.generateJWT();
            return res.json({ user: user.toAuthJSON() });
        } else {
            return res.status(422).json(info);
        }
    })(req, res, next);
});

export default login;