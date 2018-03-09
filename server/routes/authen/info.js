import express from 'express';
import mongoose from 'mongoose';
import jwt from 'express-jwt';
import passport from 'passport';

var User = mongoose.model('User');

const check = express.Router();

check.post('/info', (req, res, next) => {
    User.findById(req.payload.id)
        .then((user) => res.json({ user: user.toAuthJSON() }));
});

export default check;