import auth from "../middleware/auth.js";
import Project_Category from "../models/project_category.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {

  const data = await Project_Category.find();

  res.send(data);

});

router.post("/", async (req, res) => {
 
  const { name_project,description_project,address_project, area, investor, images, investment_capital, posLng, posLat, status, date_start} = req.body;

  let data = new Project_Category({ name_project,description_project, area,address_project, investor, images,  investment_capital, posLng, posLat, status, date_start });

  data = await data.save();

  res.send(data);

});

router.put("/:id", async (req, res) => {
 
  const data = await Project_Category.findById(req.params.id);

  if (!data) return res.status(404).send("project_category not found...");

  const { name_project,description_project,address_project, area, investor, images,  investment_capital, posLng, posLat, status, date_start } = req.body;

  const updatedData = await Project_Category.findByIdAndUpdate(req.params.id,
    { name_project,description_project,address_project, area, investor, images,  investment_capital, posLng, posLat, status, date_start },
    { new: true }
  );

  res.send(updatedData);

});

router.delete("/:id", async (req, res) => {
    
  const data = await Project_Category.findById(req.params.id);

  if (!data) return res.status(404).send("project_categroy not found...");

  const deleteData = await Project_Category.findByIdAndDelete(req.params.id);

  res.send(deleteData);

});

export default router;
