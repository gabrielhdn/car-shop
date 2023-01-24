import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import AbstractService from './AbstractService';

class CarService extends AbstractService<ICar, Car> {
  constructor() {
    super(Car, new CarODM(), 'Car');
  }
}

export default CarService;