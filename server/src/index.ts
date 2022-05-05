import express from "express";
import { loginRoutes } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

//use loginRoutes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["dfkgd"] }));
app.use(loginRoutes);

app.listen(3000, () => {
	console.log("app is Running on 3000");
});
