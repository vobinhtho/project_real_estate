// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { User } = require("../models/user");
// const Joi = require("joi");
// const express = require("express");

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
//import Joi from 'Joi'
import express from 'express';

const router = express.Router();

router.post("/", async (req, res) => {
  // const schema = Joi.object({
  //   email: Joi.string().min(3).max(200).required().email(),
  //   password: Joi.string().min(6).max(200).required(),
  // });

  //const { error } = schema.validate(req.body);

  //if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password !");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  //console.log()
  if (!validPassword)
    return res.status(400).send("Invalid email or password !!");

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id: user._id, email: user.email, role: user.role}, jwtSecretKey)

  res.send(token);
});

export default router;
