import express from 'express';
import {
  createAdminTour,
  getAllAdminTours,
  getSingleAdminTour,
  updateAdminTour,
  deleteAdminTour,
  bookAdminTour,
} from '../controller/AdminTourController.js';
import upload from '../multer/Upload.js';

const adminTourRouter = express.Router();

adminTourRouter.post('/createtour', upload.single('image'), createAdminTour);
adminTourRouter.get('/getalltour', getAllAdminTours);
adminTourRouter.get('/getonetour/:id', getSingleAdminTour);
adminTourRouter.put('/updatetour/:id', upload.single('image'), updateAdminTour);
adminTourRouter.delete('/deletetour/:id', deleteAdminTour);
adminTourRouter.get('/bookedtour/:id', bookAdminTour);

export default adminTourRouter;
