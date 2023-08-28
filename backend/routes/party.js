const express = require("express");
const router = express.Router();
const Party = require("../models/Party");

router.get("/", async (req, res) => {
  try {
    const party = await Party.find();
    res.status(200).json({
      data: party,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);

    res.status(200).json({
      data: party,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const party = new Party(req.body);
    const newparty = await party.save();
    res.status(200).json({
      data: newparty,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});




router.put("/:id", async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);

    if (!party) {
      return res.status(400).json({ message: "Party does not exist" });
    }
    party.partyName = req.body.partyName || party.partyName;
    party.type = req.body.type || party.type;
    party.mobileNo = req.body.mobileNo || party.mobileNo;
    const updatedParty = await party.save();

    res.status(200).json({
      data: updatedParty,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Party.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Party is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;