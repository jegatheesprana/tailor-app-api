import {Router, Request, Response} from 'express'
import customerService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    customerService.getAll().then(customers => {
        res.status(200).json(customers);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    customerService.getById(id).then(customer => {
        res.status(200).json(customer);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateCustomer {
    name: string,
    value: string
}

router.post('/', (req: Request, res: Response) => {
    const customer : ICreateCustomer = req.body;
    customerService.create(customer).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const customer : ICreateCustomer = req.body;
    customerService.updateOne(id, customer).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    customerService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;