import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   userId:{
    type:mongoose.Schema.Types.ObjectId
   },
    role:{
        type:String,
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