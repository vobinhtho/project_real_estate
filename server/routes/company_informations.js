import auth from "../middleware/auth.js";
import Company_information from "../models/company_information.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const company_information = await Company_information.find();

  res.send(company_information);

});

router.post("/", async (req, res) => {
 
  const { company_name, email, hotline, call_center_number, address, logo, banner_images, posLng, posLat, updated_by} = req.body;

  let company_information = new Company_information({ company_name, email, hotline, call_center_number, address, logo, banner_images, posLng, posLat, updated_by });

  company_information = await company_information.save();

  res.send(company_information);

});

router.put("/:id", async (req, res) => {
 
  const company_information = await Company_information.findById(req.params.id);

  if (!company_information) return res.status(404).send("company_information not found...");

  // if (real_estate.uid !== req.user._id)
  //   return res.status(401).send("company_information update failed. Not authorized...");

  const { company_name, email, hotline, call_center_number, address, logo, banner_images, posLng, posLat, updated_by } = req.body;

  const updatedCompany_information = await Company_information.findByIdAndUpdate(req.params.id,
    { company_name, email, hotline, call_center_number, address, logo, banner_images, posLng, posLat, updated_by },
    { new: true }
  );

  res.send(updatedCompany_information);

});

router.delete("/:id", async (req, res) => {
  const c = await Company_information.findById(req.params.id);

  if (!company_information) return res.status(404).send("company_information not found...");

  // if (real_estate.uid !== req.user._id)
  //   return res.status(401).send("real_estate deletion failed. Not authorized...");

  const deletedCompany_information = await Company_information.findByIdAndDelete(req.params.id);

  res.send(deletedCompany_information);
});

export default router;
