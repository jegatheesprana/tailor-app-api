import {Router, Request, Response} from 'express'
import workOrderService from './service'
import {IWorkOrder} from "./model";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    workOrderService.getAll().then(workOrders => {
        res.status(200).json(workOrders);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    workOrderService.getById(id).then(workOrder => {
        res.status(200).json(workOrder);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.post('/', (req: Request, res: Response) => {
    const workOrder : IWorkOrder = req.body;
    workOrderService.create(workOrder).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const workOrder : IWorkOrder = req.body;
    workOrderService.updateOne(id, workOrder).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    workOrderService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;