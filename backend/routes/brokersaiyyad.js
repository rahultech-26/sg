const express = require("express");
const router = express.Router();
const BrokerSaiyyad = require("../models/BrokerSaiyyad");

router.get("/", async (req, res) => {
  try {
    const brokersaiyyad = await BrokerSaiyyad.find();
    res.status(200).json({
      data: brokersaiyyad,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const brokersaiyyad = new BrokerSaiyyad(req.body);
    const newbrokersaiyyad = await brokersaiyyad.save();
    res.status(200).json({
      data: newbrokersaiyyad,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const brokersaiyyad = await BrokerSaiyyad.findById(req.params.id);

    if (!brokersaiyyad) { 
      return res.status(400).json({ message: "BrokerSaiyyad does not exist" });
    }
    brokersaiyyad.Id = req.body.Id || brokersaiyyad.Id;
    brokersaiyyad.brokerName = req.body.brokerName || brokersaiyyad.brokerName;
    brokersaiyyad.underGroup = req.body.underGroup || brokersaiyyad.underGroup;
    brokersaiyyad.registrationType = req.body.registrationType || brokersaiyyad.registrationType;
    brokersaiyyad.fssai = req.body.fssai || brokersaiyyad.fssai;
    brokersaiyyad.brokerNumber = req.body.brokerNumber || brokersaiyyad.brokerNumber;
    brokersaiyyad.accNo = req.body.accNo || brokersaiyyad.accNo;
    brokersaiyyad.street = req.body.street || brokersaiyyad.street;
    brokersaiyyad.city = req.body.city || brokersaiyyad.city;
    brokersaiyyad.pincode = req.body.pincode || brokersaiyyad.pincode;
    brokersaiyyad.state = req.body.state || brokersaiyyad.state;
    brokersaiyyad.country = req.body.country || brokersaiyyad.country;
    brokersaiyyad.gst = req.body.gst || brokersaiyyad.gst;
    brokersaiyyad.panNo = req.body.panNo || brokersaiyyad.panNo;
    brokersaiyyad.email = req.body.email || brokersaiyyad.email;
    brokersaiyyad.bankDetail = req.body.bankDetail || brokersaiyyad.bankDetail;
    brokersaiyyad.whatsAppNo = req.body.whatsAppNo || brokersaiyyad.whatsAppNo;
    const updatedBrokerSaiyyad = await brokersaiyyad.save();

    res.status(200).json({
      data: updatedBrokerSaiyyad,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await BrokerSaiyyad.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "BrokerSaiyyad is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;