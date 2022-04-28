"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.loginRoutes = router;
router.get("/", (req, res) => {
    res.send(`
<div>
<h1>Hello</h1
</div>
`);
});
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
    if (email && password) {
    }
    else {
        res.send("Please enter email and password");
    }
});
