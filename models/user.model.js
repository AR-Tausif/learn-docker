const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    address: { type: String,},

  },
  { timestamps: true, versionKey: false }
);

const userModel = model("User", userSchema);
module.export = userModel;