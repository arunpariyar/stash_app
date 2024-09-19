import express, { Router } from 'express';
import userController from '../controllers/userController';

const userRouter: Router = express.Router();

userRouter.route('/signup').post(userController.signup);
userRouter.route('/login').post(userController.login);
userRouter.route('/').get(userController.getAllUsers);

export default userRouter;
