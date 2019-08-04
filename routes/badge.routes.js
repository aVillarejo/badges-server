const express = require("express");
const router = express.Router();

const Badge = require("../models/badge");

router.post("/", async (req, res) => {
  // const { fistName, lastName, email, jobTitle, twitter } = req.body;
  const { body } = req;

  await Badge.create(body, (err, doc) => {
    if (err) {
      return res.send({
        success: false,
        message: "Error: Server error"
      });
    }
    return res.send({
      success: true,
      message: "Success"
    });
  });
});

module.exports = router;
