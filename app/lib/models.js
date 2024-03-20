import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    IsAdmin: {
      type: Boolean,
      default: false,
    },
    IsActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamp: true }
);

const plantationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    location: {
      type: String,
      coordinates: [101.50419, 5.42343],
    },
    area: {
      type: String,
    },
    coverage: {
      type: String,
    },
  },
  { timestamp: true }
);
const palmtreeSchema = new mongoose.Schema(
  {
    tagging_id: {
      type: String,
      default: "PT000001",
      unique: true,
    },
    location: {
      type: String,
      coordinates: [101.50419, 5.42343],
    },
    image: {
      type: String,
    },
    ripeness: {
      type: String,
      enum: ["ripe", "unripe"],
    },
    ripeness_score: {
      type: Number,
      min: 0,
      max: 100,
    },
    remark: {
      type: String,
    },
    plantation_id: {
      type: "ObjectId",
      ref: "plantation",
    },
  },
  { timestamp: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Plantation =
  mongoose.models.Plantation || mongoose.model("Plantation", plantationSchema);
export const Palmtree =
  mongoose.models.Palmtree || mongoose.model("Palmtree", palmtreeSchema);
