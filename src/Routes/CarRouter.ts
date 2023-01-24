import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());
router.get('/', (req, res, next) => new CarController(req, res, next).findAll());
router.get('/:id', (req, res, next) => new CarController(req, res, next).findOne());
router.put('/:id', (req, res, next) => new CarController(req, res, next).update());

export default router;