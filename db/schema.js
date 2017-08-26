const mongoose = require('mongoose');


const affiliateSchema = mongoose.Schema({
  name: String,
  link: String,
  token: String
});


const Affiliate = mongoose.model('Affiliate', affiliateSchema);

module.exports = {
  Affiliate
}