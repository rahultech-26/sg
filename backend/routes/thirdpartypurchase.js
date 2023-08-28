const express = require("express");
const router = express.Router();
const ThirdPartyPurchase = require("../models/ThirdPartyPurchase");

router.get("/", async (req, res) => {
  try {
    const thirdpartypurchase = await ThirdPartyPurchase.find();
    res.status(200).json({
      data: thirdpartypurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const thirdpartypurchase = await ThirdPartyPurchase.findById(req.params.id);

    res.status(200).json({
      data: thirdpartypurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const thirdpartypurchase = new ThirdPartyPurchase(req.body);
    const newthirdpartypurchase = await thirdpartypurchase.save();
    res.status(200).json({
      data: newthirdpartypurchase,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const thirdpartypurchase = await ThirdPartyPurchase.findById(req.params.id);

    if (!thirdpartypurchase) {
      return res.status(400).json({ message: "ThirdPartyPurchase does not exist" });
    }
    thirdpartypurchase.saudaDate = req.body.saudaDate || thirdpartypurchase.saudaDate;
    thirdpartypurchase.brokerName = req.body.brokerName || thirdpartypurchase.brokerName;
    thirdpartypurchase.partyName = req.body.partyName || thirdpartypurchase.partyName;
    thirdpartypurchase.factoryRate = req.body.factoryRate || thirdpartypurchase.factoryRate;
    thirdpartypurchase.freight = req.body.freight || thirdpartypurchase.freight;
    thirdpartypurchase.freightCondition = req.body.freightCondition || thirdpartypurchase.freightCondition;
    thirdpartypurchase.rate = req.body.rate || thirdpartypurchase.rate;
    thirdpartypurchase.quantity = req.body.quantity || thirdpartypurchase.quantity;
    thirdpartypurchase.remainingQuantity = req.body.remainingQuantity || thirdpartypurchase.remainingQuantity;
    thirdpartypurchase.status = req.body.status || thirdpartypurchase.status;
    thirdpartypurchase.remark = req.body.remark || thirdpartypurchase.remark;
    thirdpartypurchase.cashDiscount = req.body.cashDiscount || thirdpartypurchase.cashDiscount;
    thirdpartypurchase.billNo = req.body.billNo || thirdpartypurchase.billNo;
    thirdpartypurchase.amtR = req.body.amtR || thirdpartypurchase.amtR;
    thirdpartypurchase.paymentStatus = req.body.paymentStatus || thirdpartypurchase.paymentStatus;
    const updatedThirdPartyPurchase = await thirdpartypurchase.save();

    res.status(200).json({
      data: updatedThirdPartyPurchase,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ThirdPartyPurchase.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "ThirdPartyPurchase is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;