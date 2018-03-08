import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';

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

import router from './routes';

// Register User
app.use('/api', router);

export default app;
