import {Router, Request, Response} from 'express'
import materialService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    materialService.getAll().then(materials => {
        res.status(200).json(materials);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    materialService.getById(id).then(material => {
        res.status(200).json(material);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateMaterial {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

router.post('/', (req: Request, res: Response) => {
    const material : ICreateMaterial = req.body;
    materialService.create(material).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const material : ICreateMaterial = req.body;
    materialService.updateOne(id, material).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    materialService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;