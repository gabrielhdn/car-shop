import {
  isValidObjectId,
  Model,
  models,
  Schema,
  model,
  UpdateQuery,
} from 'mongoose';
import IError from '../Interfaces/IError';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    const newCar = await this.model.create(obj);
    return newCar;
  }

  public async findAll(): Promise<T[]> {
    const cars = await this.model.find({});
    return cars;
  }

  public async findOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw { status: 422, message: 'Invalid mongo id' } as IError;
    
    const car = await this.model.findById(id);
    return car;
  }

  public async update(id: string, content: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw { status: 422, message: 'Invalid mongo id' } as IError;
    
    const updatedCar = await this.model.findByIdAndUpdate(
      id,
      content as UpdateQuery<T>,
      { new: true },
    );

    return updatedCar;
  }
}

export default AbstractODM;