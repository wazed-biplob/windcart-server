import { model, Schema } from "mongoose";
import { IUser } from "./UserInterface";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imgURL: { type: String, default: "" },
});

export const User = model<IUser>("User", userSchema);
