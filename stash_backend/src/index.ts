//---- Libraries ----
import express, { Request, Response, Express, NextFunction } from 'express';

//----Middleware----
import morgan from 'morgan';
import cors from 'cors';

//---- Routes ----
import userRouter from './routes/userRoutes';
import transactionsRouter from './routes/transactionsRoutes';

const server: Express = express();

//CORS CONFIGURATION
const corsConfig = {
  origin: 'http://localhost:5173',
};

//using middlewares
server.use(morgan('common'));
server.use(express.json());
server.use(cors(corsConfig));

// this is just to understand middleware
server.use((req: Request, res: Response, next: NextFunction) => {
  // console.log(req.headers);
  next();
});

//---- Using Routes ----
server.use('/api/users', userRouter);
server.use('/api/transactions', transactionsRouter);

export default server;
