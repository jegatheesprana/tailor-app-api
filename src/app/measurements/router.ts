import {Router, Request, Response} from 'express'
import measurementService from './service'

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    measurementService.getAll().then(measurements => {
        res.status(200).json(measurements);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    measurementService.getById(id).then(measurement => {
        res.status(200).json(measurement);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

interface ICreateMeasurement {
    name: string,
    value: string
}

router.post('/', (req: Request, res: Response) => {
    const measurement : ICreateMeasurement = req.body;
    measurementService.create(measurement).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    const measurement : ICreateMeasurement = req.body;
    measurementService.updateOne(id, measurement).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    measurementService.deleteOne(id).then(result => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(`Error : ${err}`);
    })
})

export default router;