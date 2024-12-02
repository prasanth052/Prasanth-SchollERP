var mongoose=require('mongoose')

const productschemma=new mongoose.Schema({
    name:String,
    price:Number,
    Desc:String,
    Ratings:String,
    image:[{
        image:String
    }],
    category:String,
    seller:String,
    stock:Number,
    noOfReviews:String,
    CreatedAt:Date
})

const ProductModel=mongoose.model('Product',productschemma)

module.exports=ProductModel