import express from 'express';
import auth from '../auth';
import register from './register';
import login from './login';

const authen = express.Router();

authen.use(auth.optional, register);

authen.use(auth.optional, login);

authen.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ message : 'Invalid token'});
    }
});

export default authen;