const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const Affiliate = require("../models/affiliate");



router.get("/", (req, res) => {
  Affiliate.find().then((affiliate) => {
    res.json(affiliate);
  });
});

router.post("/create", (req, res) => {
    console.log("Hit the API")
    const newAffiliateInfo = req.body.affiliate
    console.log(newAffiliateInfo)
    const newAffiliate = new Affiliate(newAffiliateInfo);
    newAffiliate
        .save()
        .then(() => {
            res.json(newAffiliate);
        })
    .catch(err => console.log(err));
})


module.exports = router;