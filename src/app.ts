import express from 'express';
import errorMiddleware from './Middlewares/ErrorMiddleware';
import carRouter from './Routes/CarRouter';
import motorcycleRouter from './Routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

app.use(errorMiddleware);

export default app;
