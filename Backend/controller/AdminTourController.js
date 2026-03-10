import AdminTour from "../model/AdminTourModel.js";
import cloudinary from "cloudinary";
import Booked from "../model/BookTourModel.js";

export const createAdminTour = async (req, res) => {
  try {
    const { title, description, location, price, duration, startDate } = req.body;

    if (!title || !description || !location || !price || !duration || !startDate) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const existing = await AdminTour.findOne({
      title: title.trim(),
      duration: Number(duration),
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "A tour with this title and duration already exists",
      });
    }

    let imageData = null;
    if (req.file && req.file.path) {
      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "AdminTours",
        resource_type: "image",
      });

      imageData = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    const newTour = await AdminTour.create({
      title,
      description,
      location,
      price,
      duration,
      startDate,
      image: imageData,
    });

    return res.status(201).json({
      success: true,
      message: "Admin tour created successfully",
      tour: newTour,
    });
  } catch (error) {
    console.error("Create Admin Tour Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllAdminTours = async (req, res) => {
  try {
    const tours = await AdminTour.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: tours.length,
      tours,
    });
  } catch (error) {
    console.error("Get Admin Tours Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSingleAdminTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await AdminTour.findById(id);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }
    return res.status(200).json({ success: true, tour });
  } catch (error) {
    console.error("Get Single Admin Tour Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateAdminTour = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location, price, duration, startDate } = req.body;

    const tour = await AdminTour.findById(id);
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }

    if (title) tour.title = title;
    if (description) tour.description = description;
    if (location) tour.location = location;
    if (price) tour.price = price;
    if (duration) tour.duration = duration;
    if (startDate) tour.startDate = startDate;

    if (req.file && req.file.path) {
      if (tour.image?.public_id) {
        await cloudinary.v2.uploader.destroy(tour.image.public_id);
      }
      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "AdminTours",
        resource_type: "image",
      });
      tour.image = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    await tour.save();
    return res.status(200).json({ success: true, message: "Tour updated successfully", tour });
  } catch (error) {
    console.error("Update Admin Tour Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteAdminTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await AdminTour.findById(id);
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }
    if (tour.image?.public_id) {
      await cloudinary.v2.uploader.destroy(tour.image.public_id);
    }
    await AdminTour.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Tour deleted successfully" });
  } catch (error) {
    console.error("Delete Admin Tour Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const bookAdminTour = async (req, res) => {
  try {
    const userId = req.userId;
    const { tourId } = req.params;
    if (!tourId) {
      return res.status(400).json({ success: false, message: "Tour ID is required" });
    }
    const tourExists = await AdminTour.findById(tourId);
    if (!tourExists) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }
    const alreadyBooked = await Booked.findOne({ userId, tourId });
    if (alreadyBooked) {
      return res.status(409).json({ success: false, message: "You have already booked this tour" });
    }
    const newBooking = await Booked.create({ userId, tourId });
    const bookingWithTourDetails = await newBooking.populate("tourId");
    return res.status(201).json({ success: true, message: "Tour booked successfully", booking: bookingWithTourDetails });
  } catch (error) {
    console.error("Admin Booking Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllBookedTours = async (req, res) => {
  try {

    const bookings = await Booked.find()
      .populate("tourId")
      .populate("userId", "name email")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    console.error("Get All Bookings Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};

export const deleteTourBookingsByAdmin = async (req, res) => {
  try {
    const { tourId } = req.params;

    const deleted = await Booked.deleteMany({ tourId });

    res.status(200).json({
      success: true,
      message: "All bookings for this tour deleted",
      deletedCount: deleted.deletedCount
    });

  } catch (error) {
    console.error("Admin Delete Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
