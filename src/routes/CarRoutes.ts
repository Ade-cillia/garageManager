import dotenv from 'dotenv';
import { Request, Response, Router } from 'express';
import { checkCarData } from '../utils/checkData';
import Car from '../models/Car';
dotenv.config()
const router = Router();

/**
 * Form for register new Car
*/
router.get('/car/new', (req : Request, res: Response) => {
    res.render('add-item');
    return;
});

/**
 * Form for register new Car
 * @param brandName String
 * @param modelName String
 * @param modelEnergy String
 * @param modelPrice Number -> Decimal128
 * @param dateBuy Date
*/
router.post('/car/new', (req : Request, res: Response): void  => {
    let errorMessage = checkCarData(req.body);

    if (errorMessage.length == 0) {
        new Car(req.body).save(req.body);
        res.redirect("/");
    }else {
        res.render('add-item',{errorMessage,lastData:req.body});
    }
    return;
});

/**
 * Form for edit one Car
*/
router.get('/car/edit/:carId', async (req : Request, res: Response): Promise<void> => {
    let car = await Car.findById(req.params.carId).catch(error => {
        res.redirect("/");
    });

    res.render("edit-item",{car});
    return;
});

/**
 * Edit one Car
*/
router.post('/car/edit/:carId', async (req : Request, res: Response): Promise<void> => {
    let carId = req.params.carId;
    let car = await Car.findById(req.params.carId).catch(error => {
        res.redirect("/");
    });
    
    let errorMessage = checkCarData(req.body);

    if (errorMessage.length == 0) {
        await Car.updateOne({ _id: carId},req.body).then(data => res.redirect("/"));
    }else {
        res.render('edit-item',{errorMessage,car});
    }
    return;
});

/**
 * Delete one Car
*/
router.get('/car/delete/:carId', async (req : Request, res: Response): Promise<void> => {
    await Car.deleteOne({_id:req.params.carId});
    res.redirect("/");
    return;
});

export default router;