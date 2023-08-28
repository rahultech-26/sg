const express = require("express");
const router = express.Router();
const MandiPurchase = require("../models/MandiPurchase");

router.get("/", async (req, res) => {
  try {
    const mandipurchase = await MandiPurchase.find();
    res.status(200).json({
      data: mandipurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mandipurchase = await MandiPurchase.findById(req.params.id);

    res.status(200).json({
      data: mandipurchase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const mandipurchase = new MandiPurchase(req.body);
    const newmandipurchase = await mandipurchase.save();
    res.status(200).json({
      data: newmandipurchase,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const mandipurchase = await MandiPurchase.findById(req.params.id);

    if (!mandipurchase) {
      return res.status(400).json({ message: "MandiPurchase does not exist" });
    }
    mandipurchase.itemList = req.body.itemList || mandipurchase.itemList;
    mandipurchase.farmNo = req.body.farmNo || mandipurchase.farmNo;
    mandipurchase.date = req.body.date || mandipurchase.date;
    mandipurchase.tradeType = req.body.tradeType || mandipurchase.tradeType;
    mandipurchase.bookletNo = req.body.bookletNo || mandipurchase.bookletNo;
    mandipurchase.pageNo = req.body.pageNo || mandipurchase.pageNo;
    mandipurchase.farmName = req.body.farmName || mandipurchase.farmName;
    mandipurchase.farmNameHindi = req.body.farmNameHindi || mandipurchase.farmNameHindi;
    mandipurchase.licenceNo = req.body.licenceNo || mandipurchase.licenceNo;
    mandipurchase.anubandhNo = req.body.anubandhNo || mandipurchase.anubandhNo;
    mandipurchase.mobileNo = req.body.mobileNo || mandipurchase.mobileNo;
    mandipurchase.village = req.body.village || mandipurchase.village;
    mandipurchase.aadharNo = req.body.aadharNo || mandipurchase.aadharNo;
    mandipurchase.sellerName = req.body.sellerName || mandipurchase.sellerName;
    mandipurchase.sellerNameHindi = req.body.sellerNameHindi || mandipurchase.sellerNameHindi;
    mandipurchase.remark = req.body.remark || mandipurchase.remark;
    mandipurchase.cashPayment = req.body.cashPayment || mandipurchase.cashPayment;
    mandipurchase.remaining = req.body.remaining || mandipurchase.remaining;
    mandipurchase.paymentDate = req.body.paymentDate || mandipurchase.paymentDate;
    mandipurchase.remainingPaymentType = req.body.remainingPaymentType || mandipurchase.remainingPaymentType;
    mandipurchase.bankLedger = req.body.bankLedger || mandipurchase.bankLedger;
    mandipurchase.ifscCode = req.body.ifscCode || mandipurchase.ifscCode;
    mandipurchase.accountNo = req.body.accountNo || mandipurchase.accountNo;
    mandipurchase.bankFarmer = req.body.bankFarmer || mandipurchase.bankFarmer;
    mandipurchase.branch = req.body.branch || mandipurchase.branch;
    mandipurchase.utrNo = req.body.utrNo || mandipurchase.utrNo;
 
    const updatedMandiPurchase = await mandipurchase.save();

    res.status(200).json({
      data: updatedMandiPurchase,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await MandiPurchase.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "MandiPurchase is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;