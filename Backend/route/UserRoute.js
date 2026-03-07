import { createUser, getAllUsers, getUser, updateUser } from "../controller/UserController.js";
import upload from "../multer/Upload.js";
import express from 'express'
const userRouter=express.Router()
userRouter.post('/createuser',upload.single('profileImage'),createUser);
userRouter.get('/getalluser', getAllUsers);
userRouter.get('/getuser/:id', getUser);
userRouter.put('/updateuser/:id',upload.single('profileImage'), updateUser);
export default userRouter;