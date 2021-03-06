import express from 'express';
import auth from '../auth';
import category from './category';
import post from './post';

const blog = express.Router();

blog.use(auth.required, category);
blog.use(auth.required, post);

blog.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ message : 'Invalid token'});
    }
});

export default blog;