import mongoose from 'mongoose'
const company_informationSchema = mongoose.Schema({
  company_name: String,
  introduction_company:String,
  email: String,
  hotline: String,
  call_center_number: String,
  address : String,
  logo: String,
  posLng: String, 
  posLat:String,
  banner_images:[],
  //updated_by: String,
  // created_date: { type: Date, default: Date.now },
  // updated_date: { type: Date, default: Date.now },
})

var Company_information = mongoose.model("company_information", company_informationSchema);

export default Company_information;
