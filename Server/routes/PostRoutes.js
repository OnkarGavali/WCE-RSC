const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');


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

router.post('/paragraphs/:name',verifyJWT,async (req,res) => {
    try{
        const name = req.params.name;
        let paragraphs =await paragraph.findOne({id:1})
        if(name == "home"){
            const {HomeParagraph} = req.body;
            paragraphs.HomeParagraph = HomeParagraph;
        }
        if(name == "footer"){
            const {FooterParagraph} = req.body;
            paragraphs.FooterParagraph = FooterParagraph;
        }
        paragraphs.save();
        res.send('ok');
    }
    catch(err){
        console.log(err);
    }
    
})

module.exports = router;