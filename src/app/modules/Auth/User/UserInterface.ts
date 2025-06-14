import { Model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  imgURL?: string;
}

export interface IUserModel extends Model<IUser> {
  userExistByEmail: (email: string) => Promise<IUser>;
  passwordMatch: (
    plainPassword: string,
    hashedPassword: string
  ) => Promise<boolean>;
}
