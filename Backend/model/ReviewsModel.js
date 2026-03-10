import mongoose from "mongoose";
const reviewSchema=new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'auth'
},
reviewstext:{
    type:String,
    required:true
},
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
})
const Reviews=mongoose.model("reviews",reviewSchema)
export default Reviews