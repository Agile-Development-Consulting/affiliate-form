const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = require("../models/affiliate");



router.get("/", (req, res) => {
  Affiliate.find().then((user) => {
    res.json(affiliate);
  });
});

router.post("/create", (req, res) => {
    console.log("Hit the API")
    const newAffiliateInfo = req.body
    console.log(newAffiliateInfo)
    const newAffiliate = new Affiliate(newAffiliateInfo);
    newUser.save()
    .then(() => {
        res.send("You did it!");
    })
    .catch(err => console.log(err));
})


module.exports = router;