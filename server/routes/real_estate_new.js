import auth from "../middleware/auth.js";
import Real_Estate_New from "../models/real_estate_new.js";
import express from "express";

const router = express.Router();

// router.get("/", async (req, res, next) => {

//   const data = await Real_Estate_New.find();

//   res.send(data);

// });
router.get("/", async (req, res, next) => {

  const data = await Real_Estate_New.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
  const {  title, abstract, content, cover, creator, user_id, status, createdAt } = req.body;

  let data = new Real_Estate_New({ title, abstract, content, cover, creator, user_id, status, createdAt });

  data = await data.save();

  res.send(data);

});

router.put("/:id", async (req, res) => {
 
  const data = await Real_Estate_New.findById(req.params.id);

  if (!data) return res.status(404).send("Real_Estate_New not found...");

  const { title, abstract, content, cover, creator, user_id, status, createdAt } = req.body;

  const updatedData = await Real_Estate_New.findByIdAndUpdate(req.params.id,
    { title, abstract, content, cover, creator, user_id, status, createdAt },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await Real_Estate_New.findById(req.params.id);

  if (!data) return res.status(404).send("Real_Estate_New not found...");

  const deleteData = await Real_Estate_New.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

export default router;
