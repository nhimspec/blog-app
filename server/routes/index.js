import express from 'express';
const router = express.Router();
import authen from './authen';

router.use('/user', authen);

export default router;