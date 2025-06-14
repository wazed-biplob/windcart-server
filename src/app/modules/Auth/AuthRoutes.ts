import { Router } from "express";
import { AuthControllers } from "./AuthControllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthValidation } from "./AuthValidations";

const router = Router();

router.post(
  "/create-user",
  validateRequest(AuthValidation.registrationValidationSchema),
  AuthControllers.createUser
);
export const authRoutes = router;
