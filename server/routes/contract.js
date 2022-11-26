import auth from "../middleware/auth.js";
import Contract from "../models/contract.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await Contract.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
  const { type_of_contract, name_of_real_estate, value, percent,   employeeid, realestateid, CIDA, addressA, phone_numberA, representA, addressB, phone_numberB, representB, CIDB, status} = req.body;

  let data = new Contract({ type_of_contract, name_of_real_estate, value, percent,   employeeid, realestateid, CIDA, addressA, phone_numberA, representA, addressB, phone_numberB, representB, CIDB, status });

  data = await data.save();

  res.send(data);

});

router.put("/:id", async (req, res) => {
 
  const data = await Contract.findById(req.params.id);

  if (!data) return res.status(404).send("Contract not found...");

  const { type_of_contract, name_of_real_estate, value, percent,   employeeid, realestateid, CIDA, addressA, phone_numberA, representA, addressB, phone_numberB, representB, CIDB, status } = req.body;

  const updatedData = await Contract.findByIdAndUpdate(req.params.id,
    { type_of_contract, name_of_real_estate, value, percent,   employeeid, realestateid, CIDA, addressA, phone_numberA, representA, addressB, phone_numberB, representB, CIDB, status },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await Contract.findById(req.params.id);

  if (!data) return res.status(404).send("Contract not found...");

  const deleteData = await Contract.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

export default router;
