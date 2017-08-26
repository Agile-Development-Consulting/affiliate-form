require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Affiliate = require('../models/affiliate');

// Use native promises
mongoose.Promise = global.Promise;

Affiliate.remove({}, (err) => console.log(err));

const affiliateOne = new Affiliate({
    name: "Mark & Cathy Cornelison",
    link: "https://uy237.isrefer.com/go/vs0917/visiontrust/",
    token: "mark-cathy"
})

affiliateOne.save().then(() => console.log("Affiliate One Saved!"));

mongoose.connection.close();