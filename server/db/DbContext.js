import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import { PinSchema } from "../models/Pin";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Pins = mongoose.model("Pin", PinSchema);

  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
