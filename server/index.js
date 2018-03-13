import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import passport from 'passport';

var isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(bodyParser.json());
app.set('port', (process.env.API_PORT || 3000));

if (isProduction) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/blog-app');
    mongoose.set('debug', true);
}

import './models/User';
import './models/Category';
import './models/Post';
import './config/passport';

import router from './routes';
import store from './routes/store';

// Register User
app.use('/api', router);
app.use('/store', store);

export default app;
