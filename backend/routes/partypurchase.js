const express = require("express");
const router = express.Router();
const PartyPurchase = require("../models/PartyPurchase");

router.get("/", async (req, res) => {
  try {
    const partypurchase = await PartyPurchase.find();
    res.status(200).json({
      data: partypurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const partypurchase = await PartyPurchase.findById(req.params.id);

    res.status(200).json({
      data: partypurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const partypurchase = new PartyPurchase(req.body);
    const newpartypurchase = await partypurchase.save();
    res.status(200).json({
      data: newpartypurchase,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const partypurchase = await PartyPurchase.findById(req.params.id);

    if (!partypurchase) {
      return res.status(400).json({ message: "PartyPurchase does not exist" });
    }
    partypurchase.saudaDate = req.body.saudaDate || partypurchase.saudaDate;
    partypurchase.brokerName = req.body.brokerName || partypurchase.brokerName;
    partypurchase.partyName = req.body.partyName || partypurchase.partyName;
    partypurchase.factoryRate = req.body.factoryRate || partypurchase.factoryRate;
    partypurchase.freight = req.body.freight || partypurchase.freight;
    partypurchase.freightCondition = req.body.freightCondition || partypurchase.freightCondition;
    partypurchase.rate = req.body.rate || partypurchase.rate;
    partypurchase.quantity = req.body.quantity || partypurchase.quantity;
    partypurchase.remainingQuantity = req.body.remainingQuantity || partypurchase.remainingQuantity;
    partypurchase.status = req.body.status || partypurchase.status;
    partypurchase.remark = req.body.remark || partypurchase.remark;
    partypurchase.cashDiscount = req.body.cashDiscount || partypurchase.cashDiscount;
    partypurchase.billNo = req.body.billNo || partypurchase.billNo;
    partypurchase.amtR = req.body.amtR || partypurchase.amtR;
    partypurchase.paymentStatus = req.body.paymentStatus || partypurchase.paymentStatus;
    const updatedPartyPurchase = await partypurchase.save();

    res.status(200).json({
      data: updatedPartyPurchase,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await PartyPurchase.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "PartyPurchase is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;