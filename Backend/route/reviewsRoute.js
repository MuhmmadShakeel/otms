import express from 'express'
import { authenticateToken } from '../middleware/VerifyToken.js'
import { getReviews, submitReviews,  } from '../controller/Reviewscontroller.js'
const reviewsRouter=express.Router()
reviewsRouter.post('/addreview',authenticateToken,submitReviews)
reviewsRouter.get('/getreview',getReviews)
export default reviewsRouter