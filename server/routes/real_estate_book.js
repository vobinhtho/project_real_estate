import auth from "../middleware/auth.js";
import Real_Estate_Book from "../models/real_estate_book.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await Real_Estate_Book.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
  const {   book_form, appointment_date, appointment_time, name_contact, sdt_contact, email_contact, note,user_id,uidbook,idrealestate, status} = req.body;

  let data = new Real_Estate_Book({ book_form, appointment_date, appointment_time, name_contact, sdt_contact, email_contact, note,user_id,uidbook,idrealestate, status });

  data = await data.save();

  res.send(data);

});

router.put("/:id", async (req, res) => {
 
  const data = await Real_Estate_Book.findById(req.params.id);

  if (!data) return res.status(404).send("Real_Estate_Book not found...");

  const { book_form, appointment_date, appointment_time, name_contact, sdt_contact, email_contact, note,user_id,uidbook,idrealestate, status } = req.body;

  const updatedData = await Real_Estate_Book.findByIdAndUpdate(req.params.id,
    { book_form, appointment_date, appointment_time, name_contact, sdt_contact, email_contact, note,user_id,uidbook,idrealestate, status },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await Real_Estate_Book.findById(req.params.id);

  if (!data) return res.status(404).send("Real_Estate_Book not found...");

  const deleteData = await Real_Estate_Book.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

export default router;
