import express from 'express';
import mongoose from 'mongoose';
import config from '../../config';
import fileUpload from 'express-fileupload';
import multiparty from 'multiparty';
import path from 'path';
import validator from '../../utils/validator';

var User = mongoose.model('User');
const register = express.Router();

register.use(validator, fileUpload());
register.post('/register', (req, res, next) => {
    if (!req.files) {
        return res.status(403).json({ file: 'File cant be blank!!' });
    } else {
        req.body.file = req.files.file;
        req.check('file').isImage(req.body.avatar);
        if (req.validationErrors()) {
            return res.status(403).json({ file: 'File must be jpg, jpeg or png!!' });
        } else {
            let user = new User();
            user.fullname = req.body.fullname;
            user.username = req.body.username;
            user.email = req.body.email;
            user.setImage(req.body.avatar);
            user.setPassword(req.body.password);
            user.save()
                .then(() => {
                    let uploadDir = path.join(config.upload.image, req.body.avatar);
                    req.body.file.mv(uploadDir, (err) => {
                        if (err)
                            return res.status(403).json({ file: 'Upload went wrong!!' })
                    });
                    return res.json({ user: user.toAuthJSON() })
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

export default register;