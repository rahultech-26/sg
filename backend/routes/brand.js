const express = require("express");
const router = express.Router();
const Brand = require("../models/Brand");

router.get("/", async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json({
      data: brand,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    res.status(200).json({
      data: brand,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const newbrand = await brand.save();
    res.status(200).json({
      data: newbrand,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(400).json({ message: "Brand does not exist" });
    }
    brand.brandId = req.body.brandId || brand.brandId;
    brand.brandName = req.body.brandName || brand.brandName;
    const updatedBrand = await brand.save();

    res.status(200).json({
      data: updatedBrand,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Brand.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Brand is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;