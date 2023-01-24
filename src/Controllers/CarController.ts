import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import AbstractController from './AbstractController';

class CarController extends AbstractController<ICar, Car> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next, new CarService());
  }
}

export default CarController;