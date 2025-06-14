import { model, Schema } from "mongoose";
import { IUser, IUserModel } from "./UserInterface";
import bcrypt from "bcrypt";
const userSchema = new Schema<IUser, IUserModel>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgURL: { type: String, default: "" },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.statics.userExistByEmail = async function (email: string) {
  return await User.findOne({ email });
};

userSchema.statics.passwordMatch = async function (
  plainPassword: string,
  hashedPassword: string
) {
  const user = await bcrypt.compare(plainPassword, hashedPassword);
};

export const User = model<IUser, IUserModel>("User", userSchema);
