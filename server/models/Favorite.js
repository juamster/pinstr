import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const FavoriteSchema = new Schema(
  {
    // rel only works on objectID
    pin: { type: Schema.Types.ObjectId, rel: "Pin", required: true },
    creatorEmail: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

FavoriteSchema.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

// STUB Always includes the creator 
// PinSchema.pre("find", includeCreator);
// PinSchema.pre("findOne", includeCreator);
// async function includeCreator(next) {
//   await this.populate("creator");
//   next();
// }