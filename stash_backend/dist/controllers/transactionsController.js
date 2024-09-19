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
Object.defineProperty(exports, "__esModule", { value: true });
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = [
        { id: 1, title: 'grocery', amount: 100 },
        { id: 2, title: 'mortgage', amount: 1000 },
    ];
    try {
        res.status(200).json({
            error: false,
            data: transactions,
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
});
const transactionsController = {
    getAllTransactions,
};
exports.default = transactionsController;
