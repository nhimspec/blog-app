import path from 'path';

export default {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    store: {
        image: '/store/images/'
    },
    upload: {
        image : path.join(__dirname, '../../public/images')
    }
};