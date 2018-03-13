import express from 'express';
import mongoose from 'mongoose';
import validator from '../../utils/validator';
import fileUpload from 'express-fileupload';
import path from 'path';
import config from '../../config/';

const post = express.Router();
var Post = mongoose.model('Post');
var Category = mongoose.model('Category');

post.use(validator, fileUpload());
post.post('/post/create', (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    let post = new Post();
    post.title = req.body.title;
    post.setSlug(req.body.title);
    req.body.categories.forEach((categoryId) => {
        post.categories.push(categoryId);
    })
    post.save()
        .then(() => {
            req.body.categories.forEach((categoryId) => {
                Category.findById(categoryId, (err, category) => {
                    category.posts.push(post._id);
                    category.save();
                })
            })
        })
        .catch((err) => {
            Object.keys(err.errors).map((key, index) => {
                err.errors[key] = err.errors[key].message;
                return err.errors[key];
            });
            return res.status(403).json(err.errors);
        });
});

export default post;