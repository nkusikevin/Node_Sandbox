"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
//use loginRoutes
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["dfkgd"] }));
app.use(loginRoutes_1.loginRoutes);
app.listen(3000, () => {
    console.log("app is Running on 3000");
});
