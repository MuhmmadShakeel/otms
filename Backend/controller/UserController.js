import User from "../model/UserModel.js";
import cloudinary from 'cloudinary'


export const createUser = async (req, res) => {

try {

const userId = req.userId
const { name,role } = req.body
if (!name || !role) {
return res.status(400).json({
success:false,
message:"All Fields Require"
})
}

const existingProfile = await User.findOne({ userId })

if (existingProfile) {
return res.status(409).json({
success:false,
message:"Profile already exists"
})
}

let profileImage = {}

if (req.file) {

const upload = await cloudinary.v2.uploader.upload(
req.file.path,
{ folder:"OTMS/Users" }
)

profileImage = {
public_id: upload.public_id,
url: upload.secure_url
}

}
const user = await User.create({
userId,
name,
role,
profileImage
})

res.status(201).json({
success:true,
message:"Profile created successfully",
user
})

} catch (error) {

console.error(error)

res.status(500).json({
success:false,
message:"Server error"
})

}

}




export const getUser = async (req,res)=>{

try{

const userId = req.userId

const user = await User.findOne({ userId })

if(!user){
return res.status(404).json({
success:false,
message:"Profile not found"
})
}

res.status(200).json({
success:true,
user
})

}catch(error){

console.error(error)

res.status(500).json({
success:false,
message:"Server error"
})

}

}



export const deleteUser = async (req,res)=>{

try{

const { id } = req.params
const loggedUser = req.userId

const user = await User.findById(id)

if(!user){
return res.status(404).json({
success:false,
message:"User not found"
})
}

if(user.userId.toString() !== loggedUser){
return res.status(403).json({
success:false,
message:"Unauthorized action"
})
}

await User.findByIdAndDelete(id)

res.status(200).json({
success:true,
message:"Profile deleted successfully"
})

}catch(error){

console.error(error)

res.status(500).json({
success:false,
message:"Server error"
})

}

}



export const updateUser = async (req,res)=>{

try{

const { id } = req.params
const loggedUser = req.userId

const user = await User.findById(id)

if(!user){
return res.status(404).json({
success:false,
message:"Profile not found"
})
}

if(user.userId.toString() !== loggedUser){
return res.status(403).json({
success:false,
message:"Unauthorized action"
})
}

let updateData = {}

if(req.body.name){
updateData.name = req.body.name
}

if(req.file){

const upload = await cloudinary.v2.uploader.upload(
req.file.path,
{ folder:"OTMS/Users" }
)

updateData.profileImage = {
public_id:upload.public_id,
url:upload.secure_url
}

}

const updatedUser = await User.findByIdAndUpdate(
id,
updateData,
{ returnDocument:"after" }
)

res.status(200).json({
success:true,
message:"Profile updated",
user:updatedUser
})

}catch(error){

console.error(error)

res.status(500).json({
success:false,
message:"Server error"
})

}

}

