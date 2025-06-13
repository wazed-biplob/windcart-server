import { Router } from "express";
import { authRoutes } from "../modules/Auth/AuthRoutes";

export const router = Router();

router.use("/auth", authRoutes);
