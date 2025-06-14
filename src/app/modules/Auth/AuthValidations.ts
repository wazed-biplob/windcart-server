import { z } from "zod";

const registrationValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Password must not exceed 64 characters"),
  }),
});

export const AuthValidation = {
  registrationValidationSchema,
};
