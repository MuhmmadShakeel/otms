import express from 'express'
import { authenticateToken } from '../middleware/VerifyToken.js'
import { deleteReview, getReviews, submitReviews,  } from '../controller/Reviewscontroller.js'
const reviewsRouter=express.Router()
reviewsRouter.post('/addreview',authenticateToken,submitReviews)
reviewsRouter.get('/getreview',getReviews)
reviewsRouter.delete('/deletereview/:id',deleteReview)

export default reviewsRouter