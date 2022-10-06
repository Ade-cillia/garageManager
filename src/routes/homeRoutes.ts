import { Request, Response, Router } from 'express';
import Car  from '../models/Car';

const router = Router();

/**
 * First Page
 */
 router.get('/', async (req : Request, res: Response): Promise<void>  => {
    const allCars = await Car.find()
    res.render('home',{
        allCars
    })
});


export default router;