import { Router } from 'express';
import classes from './classes';

const router = Router();

router.use('/classes', classes);

export default router;