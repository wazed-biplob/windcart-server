import { Request, Response } from "express";
import { AuthServices } from "./AuthServices";
import { IUser } from "./User/UserInterface";
import { catchAsync } from "../../utils/catchAsync";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userData: IUser = req.body;
  const result = await AuthServices.createUser(userData);
  res.json({
    success: true,
    message: "User has been created successfully",
    data: result,
  });
});

export const AuthControllers = {
  createUser,
};
