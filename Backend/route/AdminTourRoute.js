import express from 'express';
import {
  createAdminTour,
  getAllAdminTours,
  getSingleAdminTour,
  updateAdminTour,
  deleteAdminTour,
  bookAdminTour,
  deleteTourBookingsByAdmin,
  getAllBookedTours,
} from '../controller/AdminTourController.js';
import { authenticateToken } from '../middleware/VerifyToken.js';
import upload from '../multer/Upload.js';

const adminTourRouter = express.Router();

adminTourRouter.post('/createtour', upload.single('image'), createAdminTour);
adminTourRouter.get('/getalltour', getAllAdminTours);
adminTourRouter.get('/getonetour/:id', getSingleAdminTour);
adminTourRouter.put('/updatetour/:id', upload.single('image'), updateAdminTour);
adminTourRouter.delete('/deletetour/:id', deleteAdminTour);
adminTourRouter.get('/bookedtour/:id', bookAdminTour);
adminTourRouter.delete("/admin/bookings/:tourId",authenticateToken,deleteTourBookingsByAdmin);
adminTourRouter.get( "/admin/all-bookings",
  authenticateToken,
  getAllBookedTours
);

export default adminTourRouter;
