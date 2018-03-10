import express from 'express';
import path from 'path';

const store = express();

store.use(express.static(path.join(__dirname, '../../../public/')));

export default store;