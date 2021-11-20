const express = require('express')
const router = express.Router()

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');
const organization = require('../models/organization');
const advisory = require('../models/advisory');
const contributionTopics = require('../models/contributionTopics');
const dates = require('../models/date');
const registration = require('../models/registration');
const image = require('../models/image');
const posterPresentation = require('../models/posterPresentation');

router.get('/Paragraphs/:name',async (req,res) => {
    const para = await paragraph.findOne({id:1});
    const name = req.params.name;
    res.json({Paragraphs:para});
})

router.get('/schedule',async (req,res) => {
    const para = await Schedule.find({});
    res.send(para);
})

router.get('/keyNotes',async (req,res) => {
    const keynotes = await keyNotes.find({});
    res.send(keynotes);
})

router.get('/organization',async (req,res) => {
    const data = await organization.find({});
    res.send(data);
})

router.get('/advisory',async (req,res) => {
    const data = await advisory.find({});
    res.send(data);
})

router.get('/contributionTopics',async (req,res) => {
    const data = await contributionTopics.find({});
    res.send(data);
})

router.get('/dates',async (req,res) => {
    const data = await dates.find({});
    res.send(data);
})

router.get('/registration',async (req,res) => {
    const data = await registration.find({});
    res.send(data);
})

router.get('/images/:imagetype',async(req,res) => {
    const data = await image.find({imagetype:req.params.imagetype});
    res.send(data);
})

router.get('/posterPresentation',async (req,res) => {
    const data = await posterPresentation.find({});
    res.send(data);
})

module.exports = router;