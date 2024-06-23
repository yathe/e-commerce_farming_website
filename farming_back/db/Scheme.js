const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  name: String,
  description: String,
  eligibility: String,
  benefits: String,
  link: String,
  image: String
});

module.exports = mongoose.model('Scheme', schemeSchema);
