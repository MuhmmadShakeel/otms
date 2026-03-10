import Tour from "../model/TourModel.js";
import AdminTour from "../model/AdminTourModel.js";
import Booked from "../model/BookTourModel.js";
import cloudinary from "cloudinary";


export const createTour = async (req, res) => {
  try {

    const { title, description, location, price, duration, startDate } = req.body;

    if (!title || !description || !location || !price || !duration || !startDate) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided"
      });
    }

    const existingTour = await Tour.findOne({
      title: title.trim(),
      duration: Number(duration),
      userId: req.userId
    });

    if (existingTour) {
      return res.status(409).json({
        success: false,
        message: "You already created this tour"
      });
    }

    let imageData = null;

    if (req.file?.path) {

      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Tours"
      });

      imageData = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url
      };

    }

    const tour = await Tour.create({
      title,
      description,
      location,
      price: Number(price),
      duration: Number(duration),
      startDate,
      image: imageData,
      userId: req.userId,
      status: "pending"
    });

    res.status(201).json({
      success: true,
      message: "Tour submitted for admin approval",
      tour
    });

  } catch (error) {

    console.error("Create Tour Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }
};


export const getUserTours = async (req, res) => {
  try {

    const tours = await Tour.find({
      userId: req.userId
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tours.length,
      tours
    });
  } catch (error) {

    console.error("User Tours Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }

};


export const getAllTours = async (req, res) => {

  try {

    const tours = await Tour.find().populate('userId','name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: tours.length,
      tours
    });
  } catch (error) {

    console.error("Admin Tours Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }

};



export const updateTour = async (req, res) => {

  try {

    const { id } = req.params;

    const { title, description, location, price, duration, startDate } = req.body;

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    if (tour.userId.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "Not allowed"
      });
    }

    if (title) tour.title = title;
    if (description) tour.description = description;
    if (location) tour.location = location;
    if (price) tour.price = price;
    if (duration) tour.duration = duration;
    if (startDate) tour.startDate = startDate;

    if (req.file?.path) {

      if (tour.image?.public_id) {
        await cloudinary.v2.uploader.destroy(tour.image.public_id);
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Tours"
      });

      tour.image = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url
      };

    }

    await tour.save();

    res.status(200).json({
      success: true,
      message: "Tour updated successfully",
      tour
    });

  } catch (error) {

    console.error("Update Tour Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }

};




export const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // delete image from cloudinary if exists
    if (tour.image?.public_id) {
      await cloudinary.v2.uploader.destroy(tour.image.public_id);
    }

    await Tour.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
    });

  } catch (error) {
    console.error("Delete Tour Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




export const approveTour = async (req, res) => {

  try {

    const { id } = req.params;

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    tour.status = "approved";
    tour.rejectionMessage = "";

    await tour.save();

    res.status(200).json({
      success: true,
      message: "Tour approved",
      tour
    });

  } catch (error) {

    console.error("Approve Tour Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }

};



export const rejectTour = async (req, res) => {

  try {

    const { id } = req.params;
    const { message } = req.body;

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found"
      });
    }

    tour.status = "rejected";
    tour.rejectionMessage = message || "Rejected by admin";

    await tour.save();

    res.status(200).json({
      success: true,
      message: "Tour rejected",
      tour
    });

  } catch (error) {

    console.error("Reject Tour Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error"
    });

  }

};


export const bookTour = async (req, res) => {
  try {
    const userId = req.userId; // From auth middleware
    const { tourId } = req.params; // Make sure the route has /:tourId

    // Validate tourId
    if (!tourId) {
      return res.status(400).json({
        success: false,
        message: "Tour ID is required in the URL params",
      });
    }

    // Check if tour exists
    const tourExists = await AdminTour.findById(tourId);
    if (!tourExists) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // Check if already booked by this user
    const alreadyBooked = await Booked.findOne({ userId, tourId });
    if (alreadyBooked) {
      return res.status(409).json({
        success: false,
        message: "You have already booked this tour",
      });
    }

    // Create new booking
    const newBooking = await Booked.create({ userId, tourId });

    // Populate tour details for response
    const bookingWithTour = await newBooking.populate("tourId", "title description location price duration startDate image");

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Tour booked successfully",
      booking: bookingWithTour,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while booking the tour",
    });
  }
};


export const getUserBookedTours = async (req, res) => {
  try {
    const userId = req.userId;

    const bookings = await Booked.find({ userId })
      .populate("tourId")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.error("Fetch Booking Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




export const deleteUserBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const { tourId } = req.params;

    const booking = await Booked.findOneAndDelete({ userId, tourId });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });

  } catch (error) {
    console.error("Delete Booking Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};





