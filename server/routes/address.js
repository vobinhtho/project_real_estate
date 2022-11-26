import auth from "../middleware/auth.js";
import Address from '../models/address.js'
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {

  const address = await Address.find();

  res.send(address);

});

export default router;
