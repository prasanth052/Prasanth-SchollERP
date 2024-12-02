const mongoose =require('mongoose')

const orderschema=new mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdAt:Date
})


const OrderModel=mongoose.model('Order',orderschema)
module.exports=OrderModel