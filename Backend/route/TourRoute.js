import express from 'express'
import {
  bookTour,
  createTour,
  deleteTour,
  getAllTours,
  getSingleTour,
  updateTour,
} from '../controller/TourController.js'
import upload from '../multer/Upload.js'
import { authenticateToken } from '../middleware/VerifyToken.js'

const tourRouter = express.Router()

tourRouter.use(authenticateToken)

tourRouter.post('/createtour', upload.single('image'), createTour)
tourRouter.get('/getalltour', getAllTours)
tourRouter.get('/getonetour/:id', getSingleTour)
tourRouter.put('/updatetour/:id', upload.single('image'), updateTour)
tourRouter.delete('/deletetour/:id', deleteTour)
tourRouter.get('/bookedtour/:id', bookTour)

export default tourRouter;