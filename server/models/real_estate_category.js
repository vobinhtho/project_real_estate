import mongoose from 'mongoose'
const real_estateCategorySchema = mongoose.Schema({
    name_category:String,
    description_category:String,
})

var real_estateCategory = mongoose.model("real_estate_category", real_estateCategorySchema);

export default real_estateCategory;
