import {Router, Request, Response} from 'express'
import paymentService from './service'
import {IPayment} from "./model";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    paymentService.getAll().then(payments => {
        res.status(200).json(payments);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    paymentService.getById(id).then(payment => {
        res.status(200).json(payment);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.post('/', (req: Request, res: Response) => {
    const payment : IPayment = req.body;
    paymentService.create(payment).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const payment : IPayment = req.body;
    paymentService.updateOne(id, payment).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    paymentService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;