import express from 'express';
import mongoose from 'mongoose';

const category = express.Router();
var Category = mongoose.model('Category');

category.post('/', (req, res, next) => {
    let category = new Category();
    category.children.push({ name: 'Liesl' });
    console.log(category);
    // category.save();
});

export default category;