import Tour from "../model/TourModel.js";
import Booked from "../model/BookTourModel.js";
import cloudinary from "cloudinary";



export const createTour = async (req, res) => {
  try {
    const { title, description, location, price, duration, startDate } = req.body;

    // Validate required fields
    if (!title || !description || !location || !price || !duration || !startDate) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    // Prevent duplicate tour creation by same user
    const existingTour = await Tour.findOne({
      title: title.trim(),
      duration: Number(duration),
      userId: req.userId,
    });

    if (existingTour) {
      return res.status(409).json({
        success: false,
        message: "You have already created a tour with this title and duration",
      });
    }

    let imageData = null;

    // Upload image to Cloudinary
    if (req.file?.path) {
      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Tours",
        resource_type: "image",
      });

      imageData = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    const newTour = await Tour.create({
      title,
      description,
      location,
      price: Number(price),
      duration: Number(duration),
      startDate,
      image: imageData,
      userId: req.userId,
    });
console.log("User creating tour:", req.userId);
    return res.status(201).json({
      success: true,
      message: "Tour created successfully",
      tour: newTour,
    });

  } catch (error) {
    console.error("Create Tour Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const getAllTours = async (req, res) => {
  try {
    // only return tours owned by authenticated user
    const tours = await Tour.find({ userId: req.userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: tours.length,
      tours,
    });

  } catch (error) {
    console.error("Get Tours Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // ensure the requesting user owns this tour
    if (tour.userId.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to view this tour",
      });
    }

    return res.status(200).json({
      success: true,
      tour,
    });

  } catch (error) {
    console.error("Get Single Tour Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
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
        message: "Tour not found",
      });
    }

    // ownership check
    if (tour.userId.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this tour",
      });
    }

    // Update fields if provided
    if (title) tour.title = title;
    if (description) tour.description = description;
    if (location) tour.location = location;
    if (price) tour.price = price;
    if (duration) tour.duration = duration;
    if (startDate) tour.startDate = startDate;

    // If new image uploaded
    if (req.file && req.file.path) {

      // Delete old image if exists
      if (tour.image?.public_id) {
        await cloudinary.v2.uploader.destroy(tour.image.public_id);
      }

      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Tours",
        resource_type: "image",
      });

      tour.image = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    await tour.save();

    return res.status(200).json({
      success: true,
      message: "Tour updated successfully",
      tour,
    });

  } catch (error) {
    console.error("Update Tour Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
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

    // ownership check
    if (tour.userId.toString() !== req.userId) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to delete this tour",
      });
    }

    // Delete image from cloudinary if exists
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



export const bookTour = async (req, res) => {
  try {
    const userId = req.userId;
    const { tourId } = req.params;

    if (!tourId) {
      return res.status(400).json({
        success: false,
        message: "Tour ID is required",
      });
    }

    // Check if tour exists
    const tourExists = await Tour.findById(tourId);
    if (!tourExists) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    // Check if already booked
    const alreadyBooked = await Booked.findOne({ userId, tourId });
    if (alreadyBooked) {
      return res.status(409).json({
        success: false,
        message: "You have already booked this tour",
      });
    }

    // Create booking
    const newBooking = await Booked.create({
      userId,
      tourId,
    });

    // Populate tour details
    const bookingWithTourDetails = await newBooking.populate("tourId");

    return res.status(201).json({
      success: true,
      message: "Tour booked successfully",
      booking: bookingWithTourDetails,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
