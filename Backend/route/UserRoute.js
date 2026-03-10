import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controller/UserController.js";
import { authenticateToken } from "../middleware/VerifyToken.js";
import upload from "../multer/Upload.js";
import express from 'express'
const userRouter=express.Router()
userRouter.post('/createuser',authenticateToken, upload.single('profileImage'),createUser);
userRouter.get('/getalluser', getAllUsers);
userRouter.get('/getuser/:id', getUser);
userRouter.delete("/deletuser/:id",deleteUser)
userRouter.put('/updateuser/:id', upload.single('profileImage'), updateUser);
export default userRouter;