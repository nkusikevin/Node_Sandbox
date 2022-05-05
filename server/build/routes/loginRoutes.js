"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.loginRoutes = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not Permitted");
}
//login route
router.get("/login", (req, res) => {
    res.send(`
    <div>
    <h1>Login</h1>
    <form method="POST" action="/login">
    <div>
    <label>Email</label>
    <input type="email" name="email" placeholder="Enter Email"/>
    </div>
    <div>
    <label>Password</label>
    <input type="password" name="password" placeholder="password"/>
    </div>
    <button type="submit">Login</button>
    </form>
    </div>
    `);
});
//post login form data
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "hi@gmail.com" && password === "1234") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Please enter email and password");
    }
});
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
<div>
<h1>Hello Welcome</h1>
<a href="/login">Sign out</a>
</div>
`);
    }
    else {
        res.send(`
<div>
<h1>Hello you are not signed in</h1
<a href="/login">Sign in</a>
</div>
`);
    }
});
//logout
router.get("/logout", (req, res) => {
    req.session = undefined;
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("wooow you made it here");
});
//post decorator
function post(routeName) {
    return function (target, key, desc) {
        router.post(routeName, target[key]);
    };
}
