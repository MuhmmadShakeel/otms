import express from 'express'
import { Login, Logout, Signup, getallAuth, deleteAuth } from '../controller/AuthController.js';
import { authenticateToken } from '../middleware/VerifyToken.js';
const authRouter=express.Router()
authRouter.post('/signup', Signup);
authRouter.post('/login', Login);
authRouter.get('/logout', Logout);
authRouter.get('/getauth',  getallAuth);
authRouter.delete('/deleteauth/:id', deleteAuth);
export default authRouter