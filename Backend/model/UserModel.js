import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    profileImage:{
        public_id:{
             type:String,
        },
        url:{
              type:String,
        }
    }
})
const User=mongoose.model('user',UserSchema)
export default User