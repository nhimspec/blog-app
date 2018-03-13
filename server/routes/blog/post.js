import express from 'express';
import mongoose from 'mongoose';
import validator from '../../utils/validator';
import fileUpload from 'express-fileupload';
import path from 'path';
import config from '../../config/';

const post = express.Router();
var Post = mongoose.model('Post');

post.use(validator, fileUpload());
post.post('/post/create', (req, res, next) => {
});

export default post;