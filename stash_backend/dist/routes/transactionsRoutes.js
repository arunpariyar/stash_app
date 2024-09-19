"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactionsController_1 = __importDefault(require("../controllers/transactionsController"));
const middlewares_1 = require("../middlewares/middlewares");
const transactionsRouter = express_1.default.Router();
transactionsRouter
    .route('/')
    .get(middlewares_1.protectRoute, transactionsController_1.default.getAllTransactions);
exports.default = transactionsRouter;
