import auth from "../middleware/auth.js";
import Real_Estate_Category from "../models/real_estate_category.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await Real_Estate_Category.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
    const { name_category, description_category} = req.body;
  
    let data = new Real_Estate_Category({ name_category, description_category });
  
    data = await data.save();
  
    res.send(data);
  
  });
  
  router.put("/:id", async (req, res) => {
   
    const data = await Real_Estate_Category.findById(req.params.id);
  
    if (!data) return res.status(404).send("Real_Estate_Category not found...");
  
    const { name_category, description_category } = req.body;
  
    const updatedData = await Real_Estate_Category.findByIdAndUpdate(req.params.id,
      { name_category, description_category },
      { new: true }
    );
  
    res.send(updatedData);
  
  });
  
  router.delete("/:id", async (req, res) => {
      
    const data = await Real_Estate_Category.findById(req.params.id);
  
    if (!data) return res.status(404).send("Real_Estate_Category not found...");
  
    const deleteData = await Real_Estate_Category.findByIdAndDelete(req.params.id);
  
    res.send(deleteData);
  
  });
  
  export default router;