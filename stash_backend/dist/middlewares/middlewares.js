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
exports.protectRoute = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const db_1 = __importDefault(require("../config/db"));
const utility_1 = __importDefault(require("../utilities/utility"));
const asyncJwtVerify = (token, secret) => new Promise((resolve, reject) => {
    jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(decoded);
        }
    });
});
const protectRoute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    // 1. Get the token if its there
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                error: true,
                message: 'Token not found ! Please login to get access',
            });
        }
        // 2. Verification of the token
        try {
            const decoded = yield asyncJwtVerify(token, config_1.default.JWT_SECRET);
            const { id, iat } = decoded;
            // 3. Check if user still exits
            const freshUser = yield db_1.default.user.findUnique({
                where: {
                    id: id,
                },
            });
            if (!freshUser) {
                return res.status(401).json({
                    error: true,
                    message: 'The user belonging to the token no longer exits',
                });
            }
            const passwordChangedAt = new Date(String(freshUser.passwordChangedAt)).getTime();
            // 4. Check if user changed password after the JWT was issued
            const wasChanged = utility_1.default.changedPasswordAfter(iat, passwordChangedAt);
            console.log(wasChanged);
            if (wasChanged) {
                return res.status(401).json({
                    error: true,
                    message: 'User recently changes password',
                });
            }
        }
        catch (error) {
            return res.status(401).json({
                error: true,
                message: error,
            });
        }
        // finally call next
    }
    else {
        return res.status(401).json({
            error: true,
            message: 'Token not found ! Please login to get access',
        });
    }
    next();
});
exports.protectRoute = protectRoute;
