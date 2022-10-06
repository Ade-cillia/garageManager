import { Request, Response, Router } from 'express';
import Car from '../../models/Car';

const router = Router();

router.route('/cars')
.get((req : Request, res: Response) => {
    const allCar = Car.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error));
});

router.route('/car')
.post((req : Request, res: Response) => {
    const car = new Car(req.body)
    car.save()
    .then(data => res.status(200).json({message: "Car created successfully"}))
    .catch(error => res.status(400).json(error));
});

router.route('/car/:id')
.get((req: Request, res: Response) => {
    Car.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error)); 
})
.put((req: Request, res: Response) => {
    Car.updateOne({ _id: req.params.id},req.body)
    .then(data => res.status(200).json({message: "Car updated successfully"}))
    .catch(error => res.status(400).json(error)); 
})
.delete((req: Request, res: Response) => {
    Car.deleteOne({ _id: req.params.id})
    .then(data => res.status(200).json({message: "Car deleted successfully"}))
    .catch(error => res.status(400).json(error)); 
});


export default router;