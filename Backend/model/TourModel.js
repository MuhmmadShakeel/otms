import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    duration: {
      type: Number,
      required: true,
      min: 1,
    },

    startDate: {
      type: Date,
      required: true,
    },

    image: {
      public_id: String,
      url: String,
    },

    // User who created the tour
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },

    // Admin approval system
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // Message if admin rejects the tour
    rejectionMessage: {
      type: String,
      default: "",
    },

    // Optional: who approved/rejected
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
    },

    reviewedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("tour", tourSchema);

export default Tour;