import { Router } from "express";

import userRouter from '../app/user/router';
import measurementRouter from '../app/measurements/router'
import customerRouter from '../app/customers/router'
import tailorRouter from '../app/tailors/router'
import coatRentingsRouter from '../app/coatRentings/router'
import materialsRouter from '../app/materials/router'
import paymentsRouter from '../app/payments/router'
import productsRouter from '../app/products/router'
import workOrdersRouter from '../app/workOrders/router'
import appointmentRouter from './appointments';
import adminRouter from './admin'

const router: Router = Router();

router.use('/user', userRouter);
router.use('/measurements', measurementRouter);
router.use('/customers', customerRouter);
router.use('/tailors', tailorRouter);
router.use('/coatRentings', coatRentingsRouter);
router.use('/materials', materialsRouter);
router.use('/payments', paymentsRouter);
router.use('/products', productsRouter);
router.use('/workOrders', workOrdersRouter);
router.use('/appointments', appointmentRouter);
router.use('/admin', adminRouter);

export default router