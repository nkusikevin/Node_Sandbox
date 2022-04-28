import { Router } from "express";
import { Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.send(`
<div>
<h1>Hello</h1
</div>
`);
});

//login route
router.get("/login", (req: Request, res: Response) => {
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
router.post("/login", (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (email && password) {
    } else {
        res.send("Please enter email and password");
    }
});

export { router as loginRoutes };
