import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const PinSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

PinSchema.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});


