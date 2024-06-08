import { Router } from "express";
import { login } from "../controllers/authenticator";

const router: Router = Router();

router.get('/', login);

export default router;