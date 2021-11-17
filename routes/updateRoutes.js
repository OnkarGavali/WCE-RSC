const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');
const mongoose = require("mongoose");

const organization = require("../models/organization");
const advisory = require("../models/advisory");
const keyNotes = require("../models/keyNotes");
const contributionTopics = require('../models/contributionTopics');
const dates = require('../models/date');
const registration = require('../models/registration');
const posterPresentation = require('../models/posterPresentation');

router.put('/organization/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await organization.findOne({ _id: id });
    await organization.updateOne({_id:id},req.body );
    // let doc = organization.findOneAndUpdate({_id:id},req.body,{new:true});
    res.send("Data of Organization Updated");
});

router.put('/advisory/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await advisory.findOne({ _id: id });
    await advisory.updateOne({_id:id},req.body );
    // let doc = organization.findOneAndUpdate({_id:id},req.body,{new:true});
    res.send("Data of Advisory Updated");
});

router.put('/keynotes/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await keyNotes.findOne({ _id: id });
    await keyNotes.updateOne({_id:id},req.body );
    res.send("Data of keyNotes Updated");
})

router.put('/contributionTopics/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await contributionTopics.findOne({ _id: id });
    await contributionTopics.updateOne({_id:id},req.body );
    res.send("Data of contributionTopics Updated");
})

router.put('/dates/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await dates.findOne({ _id: id });
    await dates.updateOne({_id:id},req.body );
    res.send("Data of contributionTopics Updated");
})

router.put('/registration/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await dates.findOne({ _id: id });
    await registration.updateOne({_id:id},req.body );
    res.send("Data of Registration Updated");
})

router.put('/posterPresentation/:id',verifyJWT,async(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.body);
    let doc = await posterPresentation.findOne({ _id: id });
    await posterPresentation.updateOne({_id:id},req.body );
    res.send("Data of posterPresentation Updated");
})

module.exports = router;