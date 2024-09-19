"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = express_1.default.Router();
userRouter.route('/signup').post(userController_1.default.signup);
userRouter.route('/login').post(userController_1.default.login);
userRouter.route('/').get(userController_1.default.getAllUsers);
exports.default = userRouter;
