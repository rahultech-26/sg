const express = require("express");
const router = express.Router();
const PartySaiyyad = require("../models/PartySaiyyad");

router.get("/", async (req, res) => {
  try {
    const partysaiyyad = await PartySaiyyad.find();
    res.status(200).json({
      data: partysaiyyad,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const partysaiyyad = new PartySaiyyad(req.body);
    const newpartysaiyyad = await partysaiyyad.save();
    res.status(200).json({
      data: newpartysaiyyad,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const partysaiyyad = await PartySaiyyad.findById(req.params.id);

    if (!partysaiyyad) { 
      return res.status(400).json({ message: "PartySaiyyad does not exist" });
    }
    partysaiyyad.Id = req.body.Id || partysaiyyad.Id;
    partysaiyyad.partyName = req.body.partyName || partysaiyyad.partyName;
    partysaiyyad.underGroup = req.body.underGroup || partysaiyyad.underGroup;
    partysaiyyad.broker = req.body.broker || partysaiyyad.broker;
    partysaiyyad.registrationType = req.body.registrationType || partysaiyyad.registrationType;
    partysaiyyad.fssai = req.body.fssai || partysaiyyad.fssai;
    partysaiyyad.partyNumber = req.body.partyNumber || partysaiyyad.partyNumber;
    partysaiyyad.manNo = req.body.manNo || partysaiyyad.manNo;
    partysaiyyad.street = req.body.street || partysaiyyad.street;
    partysaiyyad.city = req.body.city || partysaiyyad.city;
    partysaiyyad.pincode = req.body.pincode || partysaiyyad.pincode;
    partysaiyyad.state = req.body.state || partysaiyyad.state;
    partysaiyyad.country = req.body.country || partysaiyyad.country;
    partysaiyyad.gst = req.body.gst || partysaiyyad.gst;
    partysaiyyad.panNo = req.body.panNo || partysaiyyad.panNo;
    partysaiyyad.email = req.body.email || partysaiyyad.email;
    partysaiyyad.bankDetail = req.body.bankDetail || partysaiyyad.bankDetail;
    partysaiyyad.whatsAppNo = req.body.whatsAppNo || partysaiyyad.whatsAppNo;
   
   
   
    const updatedPartySaiyyad = await partysaiyyad.save();

    res.status(200).json({
      data: updatedPartySaiyyad,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await PartySaiyyad.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "PartySaiyyad is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;