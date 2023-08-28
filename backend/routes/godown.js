const express = require("express");
const router = express.Router();
const Godown = require("../models/Godown");

router.get("/", async (req, res) => {
  try {
    const godown = await Godown.find();
    res.status(200).json({
      data: godown,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const godown = await Godown.findById(req.params.id);

    res.status(200).json({
      data: godown,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const godown = new Godown(req.body);
    const newgodown = await godown.save();
    res.status(200).json({
      data: newgodown,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const godown = await Godown.findById(req.params.id);

    if (!godown) {
      return res.status(400).json({ message: "Godown does not exist" });
    }
    godown.godownNumber = req.body.godownNumber || godown.godownNumber;
    godown.godownName = req.body.godownName || godown.godownName;
    godown.godownAddress = req.body.godownAddress || godown.godownAddress;
    const updatedGodown = await godown.save();

    res.status(200).json({
      data: updatedGodown,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Godown.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Godown is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;