import User from "../model/UserModel.js";
import cloudinary from 'cloudinary'


export const createUser = async (req, res) => {
try{

const { name } = req.body
const userId = req.userId

if(!name){
return res.status(400).json({
success:false,
message:"Name is required"
})
}

const existingProfile = await User.findOne({ userId })

if(existingProfile){
return res.status(409).json({
success:false,
message:"Profile already exists"
})
}

let profileImage = null

if(req.file){

const upload = await cloudinary.v2.uploader.upload(
req.file.path,
{
folder:"OTMS/Users"
}
)

profileImage = {
public_id:upload.public_id,
url:upload.secure_url
}

}

const user = await User.create({
name,
userId,
profileImage
})

res.status(201).json({
success:true,
message:"Profile created successfully",
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




export const getUser = async (req, res) => {
  try {

    const userId = req.userId

    const user = await User.findOne({ userId }).select("-password")

    if (!user) {
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }

    res.status(200).json({
      success:true,
      user
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      success:false,
      message:"Internal server error"
    })
  }
}





export const deleteUser = async (req, res) => {

  try {

    const { id } = req.params

    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }

    await User.findByIdAndDelete(id)

    res.status(200).json({
      success:true,
      message:"User deleted successfully"
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      success:false,
      message:"Server error"
    })

  }
}





export const updateUser = async (req, res) => {

try{

const userId = req.userId

// safe destructuring
const { name } = req.body || {}

const updateData = {}

if(name){
updateData.name = name
}

if(req.file){

const upload = await cloudinary.v2.uploader.upload(
req.file.path,
{
folder:"OTMS/Users"
}
)

updateData.profileImage = {
public_id:upload.public_id,
url:upload.secure_url
}

}

const updatedUser = await User.findOneAndUpdate(
{ userId },
updateData,
{ returnDocument:"after" }
)

if(!updatedUser){
return res.status(404).json({
success:false,
message:"Profile not found"
})
}

res.status(200).json({
success:true,
message:"Profile updated successfully",
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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};