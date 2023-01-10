import {Router, Request, Response} from 'express'
import productService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    productService.getAll().then(products => {
        res.status(200).json(products);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    productService.getById(id).then(product => {
        res.status(200).json(product);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateProduct {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

router.post('/', (req: Request, res: Response) => {
    const product : ICreateProduct = req.body;
    productService.create(product).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const product : ICreateProduct = req.body;
    productService.updateOne(id, product).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    productService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;