import { IUser } from "./User/UserInterface";
import { User } from "./User/UserModel";

const createUser = async (userData: IUser) => {
  const user = await User.userExistByEmail(userData.email);
  if (user) {
    throw new Error("User already exists with this email");
  } else {
    return await User.create(userData);
  }
};
export const AuthServices = {
  createUser,
};
