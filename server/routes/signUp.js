import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
//import Joi from 'Joi'
import express from 'express';

const router = express.Router();

router.post("/", async (req, res) => {
  // const schema = Joi.object({
  //   name: Joi.string().min(3).max(30).required(),
  //   email: Joi.string().min(3).max(200).required().email(),
  //   password: Joi.string().min(6).max(200).required(),
  // });

  // const { error } = schema.validate(req.body);

  // if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User đã tồn tại vui lòng chọn địa chỉ email khác!");

  const { fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role } = req.body;

  user = new User({ fullname, email, password, address, phone_number, CID, dob, sex, avatar, active, role });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, jwtSecretKey)

  res.send(token);
});

export default router;
