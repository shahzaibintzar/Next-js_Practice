import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {type: 'string', required: true},
    discription: {type: 'string', required: true},
    phone: Number,

})

export const ProductModel = mongoose.models?.product || mongoose.model('product', ProductSchema)