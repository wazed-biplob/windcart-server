import { Router } from "express";
import { AuthControllers } from "./AuthControllers";

const router = Router();

router.post("/create-user", AuthControllers.createUser);
export const authRoutes = router;
