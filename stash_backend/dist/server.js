"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
//---- Configurations ----
const config_1 = __importDefault(require("./config/config"));
index_1.default.listen(config_1.default.PORT, () => {
    console.log('Server running at PORT: ', config_1.default.PORT);
});
