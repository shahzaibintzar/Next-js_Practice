import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {type: 'string', required: true},
    lastName: String,
    email: {type: 'string', required: true},
    phone: String,

})

export const userModel = mongoose.models?.profiles || mongoose.model('profiles', UserSchema)