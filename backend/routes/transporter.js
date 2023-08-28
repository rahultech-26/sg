const express = require("express");
const router = express.Router();
const Transporter = require("../models/Transporter");

router.get("/", async (req, res) => {
  try {
    const transporter = await Transporter.find();
    res.status(200).json({
      data: transporter,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const transporter = new Transporter(req.body);
    const newtransporter = await transporter.save();
    res.status(200).json({
      data: newtransporter,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const transporter = await Transporter.findById(req.params.id);

    if (!transporter) { 
      return res.status(400).json({ message: "Transporter does not exist" });
    }
    transporter.Id = req.body.Id || transporter.Id;
    transporter.partyName = req.body.partyName || transporter.partyName;
    transporter.underGroup = req.body.underGroup || transporter.underGroup;
    transporter.broker = req.body.broker || transporter.broker;
    transporter.registrationType = req.body.registrationType || transporter.registrationType;
    transporter.fssai = req.body.fssai || transporter.fssai;
    transporter.mobileNumber = req.body.mobileNumber || transporter.mobileNumber;
    transporter.manNo = req.body.manNo || transporter.manNo;
    transporter.street = req.body.street || transporter.street;
    transporter.city = req.body.city || transporter.city;
    transporter.pincode = req.body.pincode || transporter.pincode;
    transporter.state = req.body.state || transporter.state;
    transporter.country = req.body.country || transporter.country;
    transporter.gst = req.body.gst || transporter.gst;
    transporter.panNo = req.body.panNo || transporter.panNo;
    transporter.email = req.body.email || transporter.email;
    transporter.bankDetail = req.body.bankDetail || transporter.bankDetail;
    transporter.whatsAppNo = req.body.whatsAppNo || transporter.whatsAppNo;
   
   
   
    const updatedTransporter = await transporter.save();

    res.status(200).json({
      data: updatedTransporter,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Transporter.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Transporter is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;