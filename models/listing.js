const mongoose=require("mongoose");
const review = require("./review");
const Schema=mongoose.Schema;
const Review=require("./review.js");
//const { string, required } = require("joi");

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
         url:String,
         filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",

    },
    // geometry:{
    //     type:{
    //         type:String,
    //         enum:['point'],
    //         required:true,
    //     },
    //     coordinates:{
    //         type:[Number],
    //         required:true,
    //     }
    // },
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});

    }
});


const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;