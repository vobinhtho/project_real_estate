import mongoose from 'mongoose'

const real_estateSchema = mongoose.Schema({
        project_category: String,
        address : {
            province : String,
            district : String,
            ward: String,
            street: String
        },
        location: {lat: String, lng: String},
        price: {price_number: String, unit_price: String},
        area: String,
        facade: String,
        length : String,
        orientation: String,
        number_of_floors: String,
        bedroom: String,
        toilet: String,
        legal_papers: String,
        furniture: String,
        object: String,
        real_estate_form: String,
        real_estate_category: String,
        real_estate_title:String,
        description_information: String,
        image_realestate:[],
        name_contact:String,
        address_contact:String,
        phone_contact:String,
        email_contact:String,
        news_category: String,
        post_date: Date,
        expiration_date: Date,
        price_news:String,
        user_id: String,
        status: String,
        created_date: { type: Date, default: Date.now }
});

var real_estate = mongoose.model("real_estate", real_estateSchema);

export default real_estate;
