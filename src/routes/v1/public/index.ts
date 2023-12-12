import express from 'express';
const router = express.Router();
import authRoute from './math.route';

router.use('/auth', authRoute);

export default router;
