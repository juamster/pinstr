import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const PinSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    public: { type: Boolean, default: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

PinSchema.virtual("creator", {
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

