import mongoose from 'mongoose'
const contact_InformationSchema = mongoose.Schema({
    fullname: String,
    email:String,
    phone_number: String,
    title: String,
    content: String,
    status : String
})

var Contact_information = mongoose.model("contact_information", contact_InformationSchema);

export default Contact_information;
