const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema ({
    userID: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type:String,
        require: true
    },
    comment: {
        type:String
    },
    ratting: {
        type:Number,
        require: true
    }

},{
    timeStamps: true
})

 const productSchema = new mongoose.Schema ({
    
    title: {
        type : String , 
        required :true
    },
    description: {
        type : String , 
        required :true
    },
    category: {
        type : String , 
        required :true
    },
    brand: {
        type : String , 
        required :true
    },
    thumbnail: {
        type : String , 
        required :true
    },
    price:{
        type : Number,
        required : true
    },
    rating:{
        type : Number,
        required : true
    },
    stock:{
        type : Number,
        required : true
    },
    discountPercentage: {
        type:Number
    },
    image: [{
        type: String,
        required: true
    }],
    reviews: [reviewSchema]
 },{
    timeStamps: true
})

const product = mongoose.model("product",productSchema)

module.exports = product;