const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const translatte = require("translatte");
  
      translatte(req.query.text, { to: req.query.lang })
        .then((response) => {
          res.json(response.text);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  });

module.exports = router;