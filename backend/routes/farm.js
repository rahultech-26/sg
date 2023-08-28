const express = require("express");
const router = express.Router();
const Farm = require("../models/Farm");

router.get("/", async (req, res) => {
  try {
    const farm = await Farm.find();
    res.status(200).json({
      data: farm,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);

    res.status(200).json({
      data: farm,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const farm = new Farm(req.body);
    const newfarm = await farm.save();
    res.status(200).json({
      data: newfarm,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);

    if (!farm) {
      return res.status(400).json({ message: "Farm does not exist" });
    }
    farm.farmNo = req.body.farmNo || farm.farmNo;
    farm.farmName = req.body.farmName || farm.farmName;
    farm.farmNameHindi = req.body.farmNameHindi || farm.farmNameHindi;
    farm.mandiName = req.body.mandiName || farm.mandiName;
    farm.mandiLicenceNo = req.body.mandiLicenceNo || farm.mandiLicenceNo;
    farm.address = req.body.address || farm.address;
    farm.manNo = req.body.manNo || farm.manNo;
    farm.gstin = req.body.gstin || farm.gstin;
    farm.fssai = req.body.fssai || farm.fssai;
    farm.mobileNo1 = req.body.mobileNo1 || farm.mobileNo1;
    farm.mobileNo11 = req.body.mobileNo11 || farm.mobileNo11;
    farm.address = req.body.address || farm.address;
    farm.city = req.body.city || farm.city;
    farm.state = req.body.state || farm.state;
    farm.email = req.body.email || farm.email;
    farm.panNo = req.body.panNo || farm.panNo;
    farm.tanNo = req.body.tanNo || farm.tanNo;
    farm.pinCode = req.body.pinCode || farm.pinCode;
    farm.bank = req.body.bank || farm.bank;
    farm.ifsc = req.body.ifsc || farm.ifsc;
    farm.accountNo = req.body.accountNo || farm.accountNo;
    const updatedFarm = await farm.save();

    res.status(200).json({
      data: updatedFarm,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Farm.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Farm is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;