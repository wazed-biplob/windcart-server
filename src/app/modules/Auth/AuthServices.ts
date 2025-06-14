import config from "../../config/config";
import { IUser } from "./User/UserInterface";
import { User } from "./User/UserModel";
import bcrypt from "bcrypt";
const createUser = async (userData: IUser) => {
  const user = await User.userExistByEmail(userData.email);
  if (user) {
    throw new Error("User already exists with this email");
  } else {
    const plainPassword = userData.password;
    const hashedPassword = await bcrypt.hash(
      plainPassword,
      Number(config.salt_rounds)
    );
    userData.password = hashedPassword;
    return await User.create(userData);
  }
};
export const AuthServices = {
  createUser,
};
