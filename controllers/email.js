const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const Email = require("../models/email");



router.get("/", (req, res) => {
  Email.find().then((email) => {
    res.json(email);
  });
});

// router.post("/create", (req, res) => {
//     console.log("Hit the API")
//     const newAffiliateInfo = req.body.affiliate
//     console.log(newAffiliateInfo)
//     const newAffiliate = new Affiliate(newAffiliateInfo);
//     newAffiliate
//         .save()
//         .then(() => {
//             res.json(newAffiliate);
//         })
//     .catch(err => console.log(err));
// })


module.exports = router;