const express = require("express");
const router = express.Router();
const MandiSale = require("../models/MandiSale");

router.get("/", async (req, res) => {
  try {
    const mandisale = await MandiSale.find();
    res.status(200).json({
      data: mandisale,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mandisale = await MandiSale.findById(req.params.id);

    res.status(200).json({
      data: mandisale,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const mandisale = new MandiSale(req.body);
    const newmandisale = await mandisale.save();
    res.status(200).json({
      data: newmandisale,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  console.log("hi")
  try {
    const mandisale = await MandiSale.findById(req.params.id);
    if (!mandisale) {
      return res.status(400).json({ message: "MandiSale does not exist" });
    }
    mandisale.itemList = req.body.itemList || mandisale.itemList;
    mandisale.date = req.body.date || mandisale.date;
    mandisale.billingFarm = req.body.billingFarm || mandisale.billingFarm;
    mandisale.broker = req.body.broker || mandisale.broker;
    mandisale.billNumber = req.body.billNumber || mandisale.billNumber;
    mandisale.party = req.body.party || mandisale.party;
    mandisale.turnOver = req.body.turnOver || mandisale.turnOver;
    mandisale.brokerType = req.body.brokerType || mandisale.brokerType;
    mandisale.brokerRate = req.body.brokerRate || mandisale.brokerRate;
    mandisale.id = req.body.id || mandisale.id;
    mandisale.produceName = req.body.produceName || mandisale.produceName;
    mandisale.stockBalance = req.body.stockBalance || mandisale.stockBalance;
    mandisale.supplyPoint = req.body.supplyPoint || mandisale.supplyPoint;
    mandisale.discountRate = req.body.discountRate || mandisale.discountRate;
    mandisale.discount = req.body.discount || mandisale.discount;
    mandisale.totalSum = req.body.totalSum || mandisale.totalSum;
    mandisale.cgstRate = req.body.cgstRate || mandisale.cgstRate;
    mandisale.sgstRate = req.body.sgstRate || mandisale.sgstRate;
    mandisale.igstRate = req.body.igstRate || mandisale.igstRate;
    mandisale.cgst = req.body.cgst || mandisale.cgst;
    mandisale.sgst = req.body.sgst || mandisale.sgst;
    mandisale.igst = req.body.igst || mandisale.igst;
    mandisale.freightRate = req.body.freightRate || mandisale.freightRate;
    mandisale.totalFreight = req.body.totalFreight || mandisale.totalFreight;
    mandisale.advanceFreight = req.body.advanceFreight || mandisale.advanceFreight;
    mandisale.tcs = req.body.tcs || mandisale.tcs;
    mandisale.roundOff = req.body.roundOff || mandisale.roundOff;
    mandisale.lastAmount = req.body.lastAmount || mandisale.lastAmount;
    mandisale.partyAddress = req.body.partyAddress || mandisale.partyAddress;
    mandisale.partyPinCode = req.body.partyPinCode || mandisale.partyPinCode;
    mandisale.partyCity = req.body.partyCity || mandisale.partyCity;
    mandisale.partyState = req.body.partyState || mandisale.partyState;
    mandisale.partyGstin = req.body.partyGstin || mandisale.partyGstin;
    mandisale.transporterName = req.body.transporterName || mandisale.transporterName;
    mandisale.truckNo = req.body.truckNo || mandisale.truckNo;
    mandisale.driverName = req.body.driverName || mandisale.driverName;
    mandisale.driverLicenceNo = req.body.driverLicenceNo || mandisale.driverLicenceNo;
    mandisale.driverMobileNo = req.body.driverMobileNo || mandisale.driverMobileNo;
    mandisale.biltiNo = req.body.biltiNo || mandisale.biltiNo;
    mandisale.contractNo = req.body.contractNo || mandisale.contractNo;
    mandisale.anugyaNo = req.body.anugyaNo || mandisale.anugyaNo;
    mandisale.ewayBillNo = req.body.ewayBillNo || mandisale.ewayBillNo;
   
    const updatedMandiSale = await mandisale.save();

    res.status(200).json({
      data: updatedMandiSale,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await MandiSale.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "MandiSale is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;