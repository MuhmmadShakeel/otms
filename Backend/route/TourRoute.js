import express from "express";
import {
  bookTour,
  createTour,
  deleteTour,
  getAllTours,
  getUserTours,
  updateTour,
  approveTour,
  rejectTour,
  getUserBookedTours,
  deleteUserBooking,
 
} from "../controller/TourController.js";

import upload from "../multer/Upload.js";
import { authenticateToken } from "../middleware/VerifyToken.js";

const tourRouter = express.Router();



/* ================= USER ROUTES ================= */

/* Create Tour */
tourRouter.post(
  "/create",
  authenticateToken,
  upload.single("image"),
  createTour
);

/* Get Logged-in User Tours */
tourRouter.get(
  "/my-tours",
  authenticateToken,
  getUserTours
);

tourRouter.put(
  "/update/:id",
  authenticateToken,
  upload.single("image"),
  updateTour
);

tourRouter.delete(
  "/delete/:id",
  deleteTour
);

/* Book Tour */
tourRouter.get(
  "/book/:tourId",
  authenticateToken,
  bookTour
);

tourRouter.get("/my-bookings", authenticateToken,getUserBookedTours);
tourRouter.delete("/booked/:tourId", authenticateToken,deleteUserBooking);



/* ================= ADMIN ROUTES ================= */

tourRouter.get("/admin/all", getAllTours);

tourRouter.patch("/admin/approve/:id", approveTour);

tourRouter.patch("/admin/reject/:id", rejectTour);




export default tourRouter;