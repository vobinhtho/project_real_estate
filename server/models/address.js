import mongoose from 'mongoose'

const addressSchema = mongoose.Schema({
    province_name:String,
    district_name:String,
    ward_name:String
})

var address = mongoose.model("address", addressSchema);

export default address;
