import mongoose from "mongoose";

const adminTourSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const AdminTour = mongoose.model("admintour", adminTourSchema);
export default AdminTour;
