import auth from "../middleware/auth.js";
import User from "../models/user.js";
import bcrypt from 'bcrypt'
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await User.find();

  res.send(data);

});



router.post("/", async (req, res ) => {

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User đã tồn tại vui lòng chọn địa chỉ email khác!");

  const { fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role,follow } = req.body;

  user = new User({ fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role,follow });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  res.send(user);

});

router.put("/:id", async (req, res) => {
 
  const data = await User.findById(req.params.id);

  if (!data) return res.status(404).send("User not found...");

  const { fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role,follow } = req.body;

  const updatedData = await User.findByIdAndUpdate(req.params.id,
    { fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role,follow },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await User.findById(req.params.id);

  if (!data) return res.status(404).send("User not found...");

  const deleteData = await User.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

  router.get("/:id", async (req, res) => {

    const user = await User.findById(req.params.id);
  
    res.send(user);
  
  });

  // router.post("/", async (req, res) => {
  //   try {
  //       const { error } = validate(req.body);
  //       if (error) return res.status(400).send(error.details[0].message);

  //       const user = await new User(req.body).save();

  //       res.send(user);
  //   } catch (error) {
  //       res.send("An error occured");
  //       console.log(error);
  //   }
  // });
  
export default router;
