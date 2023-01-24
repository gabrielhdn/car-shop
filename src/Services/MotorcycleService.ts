import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import AbstractService from './AbstractService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleService extends AbstractService<IMotorcycle, Motorcycle> {
  constructor() {
    super(Motorcycle, new MotorcycleODM(), 'Motorcycle');
  }
}

export default MotorcycleService;