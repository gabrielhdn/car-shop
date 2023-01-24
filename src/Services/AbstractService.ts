import IError from '../Interfaces/IError';
import AbstractODM from '../Models/AbstractODM';

abstract class AbstractService<T, U> {
  private model: AbstractODM<T>;
  private modelName: string;

  constructor(
    private Domain: new(model: T) => U,
    model: AbstractODM<T>,
    modelName: string,
  ) {
    this.model = model;
    this.modelName = modelName;
  }

  public async create(vehicle: T) {
    const newVehicle = await this.model.create(vehicle);
    return new this.Domain(newVehicle);
  }

  public async findAll() {
    const vehicles = await this.model.findAll();
    return vehicles.map((vehicle) => new this.Domain(vehicle));
  }

  public async findOne(id: string) {
    const vehicle = await this.model.findOne(id);
    if (!vehicle) throw { status: 404, message: `${this.modelName} not found` } as IError;

    return new this.Domain(vehicle);
  }

  public async update(id: string, content: Partial<T>) {
    const updatedVehicle = await this.model.update(id, content);
    if (!updatedVehicle) throw { status: 404, message: `${this.modelName} not found` } as IError;

    return new this.Domain(updatedVehicle);
  }
}

export default AbstractService;