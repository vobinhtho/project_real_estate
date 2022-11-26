import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  phone_number: String,
  CID: String,
  address : {
    province : String,
    district : String,
    ward: String,
    street: String
  },
  dob: Date,
  sex: String,
  avatar: String,
  active: String,
  role: String,
  follow: []
  // created_date: { type: Date, default: Date.now },
  // updated_date: { type: Date, default: Date.now },
})

var User = mongoose.model("User", userSchema);

export default User;
