const express = require("express");
const router = express.Router();
const Mark = require("../models/Mark");

router.get("/", async (req, res) => {
  try {
    const mark = await Mark.find();
    res.status(200).json({
      data: mark,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);

    res.status(200).json({
      data: mark,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const mark = new Mark(req.body);
    const newmark = await mark.save();
    res.status(200).json({
      data: newmark,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);

    if (!mark) {
      return res.status(400).json({ message: "Mark does not exist" });
    }
    mark.mark = req.body.mark || mark.mark;
 
    const updatedMark = await mark.save();

    res.status(200).json({
      data: updatedMark,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Mark.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Mark is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;