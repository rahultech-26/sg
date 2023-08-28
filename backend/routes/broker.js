const express = require("express");
const router = express.Router();
const Broker = require("../models/Broker");

router.get("/", async (req, res) => {
  try {
    const broker = await Broker.find();
    res.status(200).json({
      data: broker,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const broker = await Broker.findById(req.params.id);

    res.status(200).json({
      data: broker,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const broker = new Broker(req.body);
    const newbroker = await broker.save();
    res.status(200).json({
      data: newbroker,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const broker = await Broker.findById(req.params.id);

    if (!broker) {
      return res.status(400).json({ message: "Broker does not exist" });
    }
    broker.brokerName = req.body.brokerName || broker.brokerName;
    broker.type = req.body.type || broker.type;
    broker.mobileNo = req.body.mobileNo || broker.mobileNo;
    const updatedBroker = await broker.save();

    res.status(200).json({
      data: updatedBroker,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Broker.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Broker is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;