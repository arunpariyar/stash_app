"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//---- Libraries ----
const express_1 = __importDefault(require("express"));
//----Middleware----
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//---- Routes ----
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const transactionsRoutes_1 = __importDefault(require("./routes/transactionsRoutes"));
const server = (0, express_1.default)();
//CORS CONFIGURATION
// const corsConfig = SERVER.DEVELOPMENT ? { origin: [] } : { origin: [] };
//using middlewares
server.use((0, morgan_1.default)('common'));
server.use(express_1.default.json());
server.use((0, cors_1.default)());
// this is just to understand middleware
server.use((req, res, next) => {
    // console.log(req.headers);
    next();
});
//---- Using Routes ----
server.use('/api/users', userRoutes_1.default);
server.use('/api/transactions', transactionsRoutes_1.default);
exports.default = server;
