import auth from "../middleware/auth.js";
import Contact_Information from "../models/contact_information.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await Contact_Information.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
  const { fullname, email, phone_number, title, content, status } = req.body;

  let data = new Contact_Information({ fullname, email, phone_number, title, content, status });

  data = await data.save();

  res.send(data);

});

router.put("/:id", async (req, res) => {
 
  const data = await Contact_Information.findById(req.params.id);

  if (!data) return res.status(404).send("Contact_Information not found...");

  const { fullname, email, phone_number, title, content, status } = req.body;

  const updatedData = await Contact_Information.findByIdAndUpdate(req.params.id,
    { fullname, email, phone_number, title, content, status },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await Contact_Information.findById(req.params.id);

  if (!data) return res.status(404).send("project_categroy not found...");

  const deleteData = await Contact_Information.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

export default router;
