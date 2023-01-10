import {Router, Request, Response} from 'express'
import coatRentingService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    coatRentingService.getAll().then(coatRentings => {
        res.status(200).json(coatRentings);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    coatRentingService.getById(id).then(coatRenting => {
        res.status(200).json(coatRenting);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateCoatRenting {
    name: string,
    value: string
}

router.post('/', (req: Request, res: Response) => {
    const coatRenting : ICreateCoatRenting = req.body;
    coatRentingService.create(coatRenting).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const coatRenting : ICreateCoatRenting = req.body;
    coatRentingService.updateOne(id, coatRenting).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    coatRentingService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;