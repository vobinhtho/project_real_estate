import mongoose from 'mongoose'
const Real_Estate_BookSchema = mongoose.Schema({
    book_form:String,
    appointment_date:Date,
    appointment_time:String,
    name_contact:String,
    sdt_contact:String,
    email_contact:String,
    note:String,
    user_id:String,
    uidbook:String,
    idrealestate:String,
    status:String,
})

var realEstateBookSchema = mongoose.model("real_estate_book", Real_Estate_BookSchema);

export default realEstateBookSchema;
