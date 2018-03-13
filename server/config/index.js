import path from 'path';

export default {
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    store: {
        image: {
            user: '/store/images/users/',
            blog: '/store/images/blogs/'
        }
    },
    upload: {
        image : {
            user: path.join(__dirname, '../../public/images/users'),
            blog: path.join(__dirname, '../../public/images/blogs')
        }
    }
};