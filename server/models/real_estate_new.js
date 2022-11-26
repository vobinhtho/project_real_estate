import mongoose from 'mongoose'
const real_estate_newSchema = mongoose.Schema({
    title:String,
    abstract:String,
    content:String,
    cover:String,
    creator:String,
    user_id:String,
    status:String,
    createdAt:{
        type: Date,
        default: new Date(),
    }
})

var address = mongoose.model("real_esate_new", real_estate_newSchema);

export default address;
