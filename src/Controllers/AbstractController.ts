import { NextFunction, Request, Response } from 'express';
import AbstractService from '../Services/AbstractService';

abstract class AbstractController<T, U> {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: AbstractService<T, U>;

  constructor(req: Request, res: Response, next: NextFunction, service: AbstractService<T, U>) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = service;
  }

  public async create() {
    try {
      const newCar = await this.service.create({ ...this.req.body });
      return this.res.status(201).json(newCar);
    } catch (e) {
      this.next(e);
    }
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findOne() {
    const { id } = this.req.params;

    try {
      const car = await this.service.findOne(id);
      return this.res.status(200).json(car);
    } catch (e) {
      this.next(e);
    }
  }

  public async update() {
    const { id } = this.req.params;
    
    try {
      const updatedCar = await this.service.update(id, this.req.body);
      return this.res.status(200).json(updatedCar);
    } catch (e) {
      this.next(e);
    }
  }
}

export default AbstractController;