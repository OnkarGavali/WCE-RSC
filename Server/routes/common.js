const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');

router.post('/schedule',verifyJWT,(req,res) => {
    const {Sr_No,Date,Particulars} = req.body;
    const newSchedule = new Schedule({
        Sr_No,
        Date,
        Particulars
    });
    newSchedule.save().then(() => {
        console.log('New Schedule saved');
        res.json({msg:"Schedule saved successfully"});
    })
})

router.post('/keyNote',verifyJWT,(req,res) => {
    const {Sr_No,Name,Designation} = req.body;
    const newSchedule = new keyNotes({
        Sr_No,
        Name,
        Designation
    });
    newSchedule.save().then(() => {
        console.log('New keyNote saved');
        res.json({msg:"keyNote saved successfully"});
    })
})

module.exports = router;