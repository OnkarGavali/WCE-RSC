const express = require('express')
const router = express.Router()

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');

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

module.exports = router;