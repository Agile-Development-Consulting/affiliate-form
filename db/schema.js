const mongoose = require('mongoose');


const affiliateSchema = mongoose.Schema({
  name: String,
  link: String,
  token: String,
  date: String,
});

const emailSchema = mongoose.Schema({
    code: String
});


const Affiliate = mongoose.model('Affiliate', affiliateSchema);
const Email = mongoose.model('Email', emailSchema);

module.exports = {
  Affiliate,
  Email
}