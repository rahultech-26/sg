const express = require("express");
const router = express.Router();
const Yield = require("../models/Yield");

router.get("/", async (req, res) => {
  try {
    const yield = await Yield.find();
    res.status(200).json({
      data: yield,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const yield = await Yield.findById(req.params.id);

    res.status(200).json({
      data: yield,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const yield = new Yield(req.body);
    const newyield = await yield.save();
    res.status(200).json({
      data: newyield,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const yield = await Yield.findById(req.params.id);

    if (!yield) {
      return res.status(400).json({ message: "Yield does not exist" });
    }
    yield.yieldId = req.body.yieldId || yield.yieldId;
    yield.yieldName = req.body.yieldName || yield.yieldName;
    yield.yieldNameHindi = req.body.yieldNameHindi || yield.yieldNameHindi;
    yield.mandiTax = req.body.mandiTax || yield.mandiTax;
    yield.unsecuredFee = req.body.unsecuredFee || yield.unsecuredFee;
    yield.hsnCode = req.body.hsnCode || yield.hsnCode;
    yield.gstTax = req.body.gstTax || yield.gstTax;
    yield.igst = req.body.igst || yield.igst;
    yield.cgst = req.body.cgst || yield.cgst;
    yield.sgst = req.body.sgst || yield.sgst;
    const updatedYield = await yield.save();

    res.status(200).json({
      data: updatedYield,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Yield.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Yield is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;