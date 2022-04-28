"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
//use loginRoutes
app.use(loginRoutes_1.loginRoutes);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log("app is Running on 3000");
});
