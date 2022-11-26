import auth from "../middleware/auth.js";
import Real_estate from "../models/real_estate.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const real_estate = await Real_estate.find();

  res.send(real_estate);

});

router.post("/", async (req, res) => {
 
  const { 
    project_category,address,location,price,area,facade,length,orientation,number_of_floors,bedroom,
    toilet,legal_papers,furniture,object,real_estate_form,real_estate_category,real_estate_title,description_information,image_realestate,
    name_contact,address_contact,phone_contact,email_contact,news_category,post_date,expiration_date,price_news,user_id,status,created_date} = req.body;

    let real_estate = new Real_estate({ project_category,address,location,price,area,facade,length,orientation,number_of_floors,bedroom,
    toilet,legal_papers,furniture,object,real_estate_form,real_estate_category,real_estate_title,description_information,image_realestate,
    name_contact,address_contact,phone_contact,email_contact,news_category,post_date,expiration_date,price_news,user_id,status,created_date });

    real_estate = await real_estate.save();

    res.send(real_estate);

});

router.put("/:id", async (req, res) => {
 
  const real_estate = await Real_estate.findById(req.params.id);

  if (!real_estate) return res.status(404).send("real_estate not found...");

  // if (real_estate.uid !== req.user._id)
  //   return res.status(401).send("real_estate update failed. Not authorized...");

  const { project_category,address,location,price,area,facade,length,orientation,number_of_floors,bedroom,
    toilet,legal_papers,furniture,object,real_estate_form,real_estate_category,real_estate_title,description_information,image_realestate,
    name_contact,address_contact,phone_contact,email_contact,news_category,post_date,expiration_date,price_news,user_id,status,created_date } = req.body;

  const updatedReal_estate = await Real_estate.findByIdAndUpdate(req.params.id,
    { 
      project_category,address,location,price,area,facade,length,orientation,number_of_floors,bedroom,
    toilet,legal_papers,furniture,object,real_estate_form,real_estate_category,real_estate_title,description_information,image_realestate,
    name_contact,address_contact,phone_contact,email_contact,news_category,post_date,expiration_date,price_news,user_id,status ,created_date  
    },
    { new: true }
  );

  res.send(updatedReal_estate);

});

router.delete("/:id", async (req, res) => {
  const real_estate = await Real_estate.findById(req.params.id);

  if (!real_estate) return res.status(404).send("real_estate not found...");

  // if (real_estate.uid !== req.user._id)
  //   return res.status(401).send("real_estate deletion failed. Not authorized...");

  const deletedReal_estate = await Real_estate.findByIdAndDelete(req.params.id);

  res.send(deletedReal_estate);
});

export default router;
