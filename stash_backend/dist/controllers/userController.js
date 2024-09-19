"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const utility_1 = __importDefault(require("../utilities/utility"));
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, config_1.default.JWT_SECRET, {
        expiresIn: config_1.default.JWT_EXPIRES,
    });
};
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                error: true,
                message: 'Name, email and password is mandatory',
            });
        }
        const existingUser = yield db_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            return res.status(400).json({
                error: true,
                message: 'User already exist with given email address',
            });
        }
        //hash password with cost of 12
        const hashPassword = yield bcrypt_1.default.hash(password, 12);
        const newUser = yield db_1.default.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                passwordChangedAt: new Date(),
            },
        });
        const token = signToken(newUser.id);
        res.status(200).json({
            error: false,
            token,
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.password,
            },
        });
    }
    catch (error) {
        res.status(400).json({ error: true, message: error });
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        //check to make sure that email and password is provided
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: 'Please provide both email and password properly',
            });
        }
        //use email to find the user
        const user = yield db_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
        //checking if there is no user and the password doesnt match at the sametime
        if (!user || !(yield utility_1.default.validatePassword(password, user.password))) {
            return res.status(401).json({
                error: true,
                message: 'Given username or password is not valid',
            });
        }
        //send token to the client
        const token = signToken(user.id);
        res.status(200).json({
            error: false,
            token,
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield db_1.default.user.findMany({
            omit: { password: true },
        });
        console.log(users);
        if (!users) {
            return res.status(400).json({ error: true, message: 'no users found' });
        }
        res.status(200).json({
            error: false,
            data: users,
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
});
const userController = { signup, login, getAllUsers };
exports.default = userController;
