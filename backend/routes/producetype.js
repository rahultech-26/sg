const express = require("express");
const router = express.Router();
const ProduceType = require("../models/ProduceType");

router.get("/", async (req, res) => {
  try {
    const producetype = await ProduceType.find();
    res.status(200).json({
      data: producetype,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const producetype = await ProduceType.findById(req.params.id);

    res.status(200).json({
      data: producetype,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const producetype = new ProduceType(req.body);
    const newproducetype = await producetype.save();
    res.status(200).json({
      data: newproducetype,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const producetype = await ProduceType.findById(req.params.id);

    if (!producetype) {
      return res.status(400).json({ message: "ProduceType does not exist" });
    }
    producetype.produceType = req.body.produceType || producetype.produceType;
 
    const updatedProduceType = await producetype.save();

    res.status(200).json({
      data: updatedProduceType,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ProduceType.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "ProduceType is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;