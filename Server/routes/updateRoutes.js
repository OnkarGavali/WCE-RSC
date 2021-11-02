const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');
const mongoose = require("mongoose");
const organization = require("../models/organization");
const advisory = require("../models/advisory");

router.put('/organization/:id',async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await organization.findOne({ _id: id });
    await organization.updateOne({_id:id},req.body );
    // let doc = organization.findOneAndUpdate({_id:id},req.body,{new:true});
    res.send("Data of Organization Updated");
});

router.put('/advisory/:id',async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await advisory.findOne({ _id: id });
    await advisory.updateOne({_id:id},req.body );
    // let doc = organization.findOneAndUpdate({_id:id},req.body,{new:true});
    res.send("Data of Advisory Updated");
});

module.exports = router;