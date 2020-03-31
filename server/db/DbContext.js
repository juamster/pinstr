import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import { PinSchema } from "../models/Pin";
import { FavoriteSchema } from "../models/Favorite";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Pins = mongoose.model("Pin", PinSchema);

  Favorites = mongoose.model("Favorite", FavoriteSchema);

  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
