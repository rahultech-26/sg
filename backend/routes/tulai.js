const express = require("express");
const router = express.Router();
const Tulai = require("../models/Tulai");

router.get("/", async (req, res) => {
  try {
    const tulai = await Tulai.find();
    res.status(200).json({
      data: tulai,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tulai = await Tulai.findById(req.params.id);

    res.status(200).json({
      data: tulai,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const tulai = new Tulai(req.body);
    const newtulai = await tulai.save();
    res.status(200).json({
      data: newtulai,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const tulai = await Tulai.findById(req.params.id);

    if (!tulai) {
      return res.status(400).json({ message: "Tulai does not exist" });
    }
    tulai.tulaiId = req.body.tulaiId || tulai.tulaiId;
    tulai.labourRate = req.body.labourRate || tulai.labourRate;
    tulai.labourRatePrint = req.body.labourRatePrint || tulai.labourRatePrint;
    tulai.labourType = req.body.labourType || tulai.labourType;
    tulai.tulaiRate = req.body.tulaiRate || tulai.tulaiRate;
    tulai.tulaiRatePrint = req.body.tulaiRatePrint || tulai.tulaiRatePrint;
    tulai.tulaiType = req.body.tulaiType || tulai.tulaiType;
  
    const updatedTulai = await tulai.save();

    res.status(200).json({
      data: updatedTulai,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Tulai.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Tulai is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;