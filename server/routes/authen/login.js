import express from 'express';
import mongoose from 'mongoose';
import jwt from 'express-jwt';

var User = mongoose.model('User');

const login = express.Router();

login.post('/login', (req, res, next) => {
    User.findById(req.payload.id).then((user) => {
        if (!user) { return res.sendStatus(401); }

        return res.json({ user: user.toAuthJSON() });
    }).catch(next);
});

export default login;