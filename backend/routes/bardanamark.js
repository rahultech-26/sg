const express = require("express");
const router = express.Router();
const BardanaMark = require("../models/BardanaMark");

router.get("/", async (req, res) => {
  try {
    const bardanamark = await BardanaMark.find();
    res.status(200).json({
      data: bardanamark,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bardanamark = await BardanaMark.findById(req.params.id);

    res.status(200).json({
      data: bardanamark,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const bardanamark = new BardanaMark(req.body);
    const newbardanamark = await bardanamark.save();
    res.status(200).json({
      data: newbardanamark,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const bardanamark = await BardanaMark.findById(req.params.id);

    if (!bardanamark) {
      return res.status(400).json({ message: "BardanaMark does not exist" });
    }
    bardanamark.bardanamark = req.body.bardanamark || bardanamark.bardanamark;
    bardanamark.bardanaMarkId = req.body.bardanaMarkId || bardanamark.bardanaMarkId;
 
    const updatedBardanaMark = await bardanamark.save();

    res.status(200).json({
      data: updatedBardanaMark,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await BardanaMark.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "BardanaMark is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;