import express, { Router } from 'express';
import transactionsController from '../controllers/transactionsController';
import { protectRoute } from '../middlewares/middlewares';

const transactionsRouter: Router = express.Router();

transactionsRouter
  .route('/')
  .get(protectRoute, transactionsController.getAllTransactions);

export default transactionsRouter;
