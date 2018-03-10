import expressValidator from 'express-validator';
import path from 'path';

const validator = expressValidator({
    customValidators: {
        isImage: (value, filename) => {
            let ext = (path.extname(filename.split('?')[0])).toLowerCase();
            let isImage = ['.jpg', '.jpeg', '.png'];

            return isImage.indexOf(ext) > -1;
        }
    }
});

export default validator;