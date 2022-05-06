import { NextFunction, Router } from "express";
import { Request, Response } from "express";
const router = Router();

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send("Not Permitted");
}

//post login form data
router.post("/login", (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;
	if (email && password && email === "hi@gmail.com" && password === "1234") {
		req.session = { loggedIn: true };
		res.redirect("/");
	} else {
		res.send("Please enter email and password");
	}
});

router.get("/", (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn) {
		res.send(`
<div>
<h1>Hello Welcome</h1>
<a href="/logout">Sign out</a>
</div>
`);
	} else {
		res.send(`
<div>
<h1>Hello you are not signed in</h1
<a href="/login">Sign in</a>
</div>
`);
	}
});

//logout

router.get("/logout", (req: Request, res: Response) => {
	req.session = undefined;
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
	res.send("wooow you made it here");
});

export { router };
