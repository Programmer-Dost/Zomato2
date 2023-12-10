
import mongoose, { Schema } from "mongoose";
const orderSchema = new Schema({
    userId: {type:String, required:true},
    orderStatus: {type:String, required:true},
    // {type:String, required:true},
    // required: true,
    amount: {type:Number, required:true},
    paymentMethod: {type:String, required:true},
        // {type:String, required:true, unique:true},
    // required: true,
    billingEmail:{type:String, required:true},
    cardBrand:{type:String, required:true},
    last4Digits:{type:Number, required:true},
    receipt_url:{type:String, required:true},
    //  {type:String, required:true},
    // {type:String, required:true},
}, {timestamps:true})
mongoose.models = {};
const Order =
  mongoose.model.Order || mongoose.model("Order", orderSchema);
export default Order;