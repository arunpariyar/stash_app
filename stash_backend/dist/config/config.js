"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_EXPIRES = exports.JWT_SECRET = exports.PORT = exports.TEST = exports.DEVELOPMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DEVELOPMENT = process.env.NODE_ENV === 'development';
exports.TEST = process.env.NODE_ENV === 'test';
exports.PORT = process.env.PORT ? Number(process.env.PORT) : 1337;
exports.JWT_SECRET = process.env.JWT_SECRET || 'and-thats-the-way-the-cookie-crumbles-local';
exports.JWT_EXPIRES = '24h';
const CONFIG = {
    PORT: exports.PORT,
    DEVELOPMENT: exports.DEVELOPMENT,
    TEST: exports.TEST,
    JWT_SECRET: exports.JWT_SECRET,
    JWT_EXPIRES: exports.JWT_EXPIRES,
};
exports.default = CONFIG;
