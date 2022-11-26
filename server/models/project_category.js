import mongoose from 'mongoose'
const projectCategorySchema = mongoose.Schema({
    name_project:String,
    description_project:String,
    address_project:String,
    investor:String,
    area:String,
    images:String,
    investment_capital:String,
    status:String,
    posLng:String,
    posLat:String,
    date_start:Date,
})

var projectCategory = mongoose.model("project_Category", projectCategorySchema);

export default projectCategory;
