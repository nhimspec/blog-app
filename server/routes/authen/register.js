import express from 'express';
import mongoose from 'mongoose';

var User = mongoose.model('User');

const register = express.Router();

register.post('/register', (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save()
        .then(() => res.json({ user: user.toAuthJSON() }))
        .catch((err) => {
            Object.keys(err.errors).map((key, index) => {
                err.errors[key] = err.errors[key].message;
                return err.errors[key];
            });
            return res.status(403).json(err.errors);
        });
});

export default register;