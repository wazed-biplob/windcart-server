import { IUser } from "./User/UserInterface";
import { User } from "./User/UserModel";

const createUser = async (userData: IUser) => {
  const result = User.create(userData);
  return result;
};

export const AuthServices = {
  createUser,
};
