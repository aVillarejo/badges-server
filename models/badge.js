const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BADGE_SCHEMA = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  }
});

module.exports = model("badges", BADGE_SCHEMA);
