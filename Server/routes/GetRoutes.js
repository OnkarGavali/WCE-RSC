const express = require('express')
const router = express.Router()

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');
const organization = require('../models/organization');
const advisory = require('../models/advisory');

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

module.exports = router;