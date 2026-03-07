import express from 'express'
import mongoose from 'mongoose'
import cloudinary from 'cloudinary'
import userRouter from './route/UserRoute.js'
import reviewsRouter from './route/reviewsRoute.js'
import cors from 'cors'
import tourRouter from './route/TourRoute.js'
import adminTourRouter from './route/AdminTourRoute.js'
import authRouter from './route/AuthRoute.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
const PORT = process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("connected to database successfully")
}).catch((error)=>{
    console.log("Error In connection",error)
});

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/reviews',reviewsRouter)
app.use('/api/tour',tourRouter)
app.use('/api/admin-tour', adminTourRouter)
app.listen(PORT,()=>{
    console.log("the server is running on the port",PORT)
});