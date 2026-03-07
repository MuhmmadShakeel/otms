import mongoose from "mongoose";

const bookedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tour",
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate booking at database level
bookedSchema.index({ userId: 1, tourId: 1 }, { unique: true });

const Booked = mongoose.model("booked", bookedSchema);
export default Booked;