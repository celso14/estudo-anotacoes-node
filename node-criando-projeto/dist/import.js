"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const ip = '127.0.5.655555';
console.log(validator_1.default.isEmail('celso.botelho16@gmail.com'));
console.log(validator_1.default.isIP(ip));
