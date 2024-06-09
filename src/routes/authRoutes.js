import express from "express";
import { authenticate } from "../controllers/authenticator.js"

const router = express.Router();

router.get('/', authenticate);

export default router