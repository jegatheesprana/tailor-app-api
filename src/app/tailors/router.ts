import {Router, Request, Response} from 'express'
import tailorService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    tailorService.getAll().then(tailors => {
        res.status(200).json(tailors);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    tailorService.getById(id).then(tailor => {
        res.status(200).json(tailor);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateTailor {
    name: string,
    value: string
}

router.post('/', (req: Request, res: Response) => {
    const tailor : ICreateTailor = req.body;
    tailorService.create(tailor).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const tailor : ICreateTailor = req.body;
    tailorService.updateOne(id, tailor).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    tailorService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;