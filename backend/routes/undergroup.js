const express = require("express");
const router = express.Router();
const UnderGroup = require("../models/UnderGroup");

router.get("/", async (req, res) => {
  try {
    const undergroup = await UnderGroup.find();
    res.status(200).json({
      data: undergroup,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const undergroup = await UnderGroup.findById(req.params.id);

    res.status(200).json({
      data: undergroup,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const undergroup = new UnderGroup(req.body);
    const newundergroup = await undergroup.save();
    res.status(200).json({
      data: newundergroup,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const undergroup = await UnderGroup.findById(req.params.id);

    if (!undergroup) {
      return res.status(400).json({ message: "UnderGroup does not exist" });
    }
    undergroup.undergroup = req.body.undergroup || undergroup.undergroup;
 
    const updatedUnderGroup = await undergroup.save();

    res.status(200).json({
      data: updatedUnderGroup,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await UnderGroup.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "UnderGroup is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;