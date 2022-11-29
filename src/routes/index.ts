import { Router } from "express";

import userRouter from '../app/user/router';
import measurementRouter from '../app/measurements/router'
import doctorsRotuer from './doctors';
import appointmentRouter from './appointments';
import adminRouter from './admin'

const router: Router = Router();

router.use('/user', userRouter);
router.use('/measurements', measurementRouter);
router.use('/appointments', appointmentRouter);
router.use('/admin', adminRouter);

export default router