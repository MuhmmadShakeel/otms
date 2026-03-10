import mongoose from "mongoose";

const bookedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    tourId: {               // ⚠ This is the correct field
      type: mongoose.Schema.Types.ObjectId,
      ref: "admintour",
      required: true,
    },

  },
  { timestamps: true }
);

bookedSchema.index({ userId: 1, tourId: 1 }, { unique: true });

const Booked = mongoose.model("booked", bookedSchema);
export default Booked;