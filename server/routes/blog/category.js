import express from 'express';
import mongoose from 'mongoose';

const category = express.Router();
var Category = mongoose.model('Category');

category.post('/category/create', (req, res, next) => {
    let category = new Category();
    category.name = req.body.name;
    category.setSlug(req.body.name);
    category.description = req.body.description;
    category.save();
});

category.get('/category/list', (req, res, next) => {
    Category.find().then((categories) => {
        var categoryList = {};

        categories.forEach((category) => {
            categoryList[category._id] = category;
        });
       
        return res.json(categoryList);
    })
})

export default category;