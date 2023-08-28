const express = require("express");
const router = express.Router();
const Bank = require("../models/Bank");

router.get("/", async (req, res) => {
  try {
    const bank = await Bank.find();
    res.status(200).json({
      data: bank,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);

    res.status(200).json({
      data: bank,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const bank = new Bank(req.body);
    const newbank = await bank.save();
    res.status(200).json({
      data: newbank,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);

    if (!bank) {
      return res.status(400).json({ message: "Bank does not exist" });
    }
    bank.ifscCode = req.body.ifscCode || bank.ifscCode;
    bank.accountNo = req.body.accountNo || bank.accountNo;
    bank.branch = req.body.branch || bank.branch;
    const updatedBank = await bank.save();

    res.status(200).json({
      data: updatedBank,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Bank.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Bank is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;