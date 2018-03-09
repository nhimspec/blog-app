import express from 'express';
import path from 'path';

const store = express();

console.log(path.join(__dirname, '../../../public/uploads/'));

store.get('/uploads/images/123', function (req, res) {
    console.log(path.join(__dirname, '../../../public/uploads/images'));
    res.sendFile(path.join(__dirname, '../../../public/uploads/'));
});

export default store;