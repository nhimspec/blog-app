import express from 'express';
import mongoose from 'mongoose';

const category = express.Router();
var Category = mongoose.model('Category');

category.post('/category/create', (req, res, next) => {
    Category.findById(req.body.parent_cat)
        .then((parentCategory) => {
            let category = new Category();
            category.name = req.body.name;
            category.setSlug(req.body.name);
            category.description = req.body.description;
            if (parentCategory) {
                category.parent = parentCategory;
            }
            category.save()
                .then(() => {
                    Category.getChildrenTree((err, categories) => {
                        return res.json(categories);
                    })
                });
        });
});

category.get('/category/list', (req, res, next) => {
    Category.getChildrenTree((err, categories) => {
        return res.json(categories);
    })
})

export default category;