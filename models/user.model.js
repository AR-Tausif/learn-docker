import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    address: { type: String,},

  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userSchema);
export default userModel;