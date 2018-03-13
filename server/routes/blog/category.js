import express from 'express';
import mongoose from 'mongoose';
import validator from '../../utils/validator';
import fileUpload from 'express-fileupload';
import path from 'path';
import config from '../../config/';

const category = express.Router();
var Category = mongoose.model('Category');

category.use(validator, fileUpload());
category.post('/category/create', (req, res, next) => {
    if (!req.files) {
        return res.status(403).json({ file: 'File cant be blank!!' });
    } else {
        console.log(req.body);
        req.body.file = req.files.file;
        req.check('file').isImage(req.body.image);
        if (req.validationErrors()) {
            return res.status(403).json({ file: 'File must be jpg, jpeg or png!!' });
        } else {
            let category = new Category();
            category.name = req.body.name;
            category.setSlug(req.body.name);
            category.description = req.body.description;
            category.setImage(req.body.image);
            category.save()
                .then(() => {
                    let uploadDir = path.join(config.upload.image.blog, req.body.image);
                    req.body.file.mv(uploadDir, (err) => {
                        if (err)
                            return res.status(403).json({ file: 'Upload went wrong!!' })
                    });
                    return res.json({ category })
                })
                .catch((err) => {
                    Object.keys(err.errors).map((key, index) => {
                        err.errors[key] = err.errors[key].message;
                        return err.errors[key];
                    });
                    return res.status(403).json(err.errors);
                });
        }
    }
});

category.get('/category/list', (req, res, next) => {
    Category.find().then((categories) => {
        return res.json(categories);
    });
})

export default category;