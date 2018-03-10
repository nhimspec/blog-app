import express from 'express';
const router = express.Router();
import authen from './authen/';
import blog from './blog/'

router.use('/user', authen);
router.use('/blog', blog);

export default router;