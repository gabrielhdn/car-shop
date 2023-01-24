import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

class MotorcycleController extends AbstractController<IMotorcycle, Motorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next, new MotorcycleService());
  }
}

export default MotorcycleController;