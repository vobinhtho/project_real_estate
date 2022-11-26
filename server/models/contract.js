import mongoose from 'mongoose'

const contractSchema = mongoose.Schema({
    type_of_contract: String, 
    name_of_real_estate: String, 
    value: String,
    percent: String,
    employeeid:String,
    realestateid:String,
    CIDA:String,
    addressA:String,
    phone_numberA:String,
    representA:String,
    addressB:String,
    phone_numberB:String,
    representB:String,
    CIDB:String,
    created_date: { type: Date, default: Date.now },
    status:String
})

var contract = mongoose.model("contract", contractSchema);

export default contract;
