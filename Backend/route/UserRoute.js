import express from "express"
import {createUser,getUser,updateUser,deleteUser} from "../controller/UserController.js"
import {authenticateToken} from "../middleware/VerifyToken.js"
import upload from "../multer/Upload.js"

const userRouter = express.Router()

userRouter.post(
"/createuser",
authenticateToken,
upload.single("profileImage"),
createUser
)

userRouter.get(
"/getuser",
authenticateToken,
getUser
)

userRouter.put(
"/updateuser/:id",
authenticateToken,
upload.single("profileImage"),
updateUser
)

userRouter.delete(
"/deleteuser/:id",
authenticateToken,
deleteUser
)

export default userRouter