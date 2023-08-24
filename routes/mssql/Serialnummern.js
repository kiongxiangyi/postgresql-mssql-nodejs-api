const express = require("express");
const router = express.Router();
const Serialnummern = require("../../models/mssql/Serialnummern");

router.get("/", async (req, res) => {
  try {
    const results = await Serialnummern.findAll({});

    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
