const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');

const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');
const organization = require('../models/organization');
const advisory = require('../models/advisory');
const contributionTopics = require('../models/contributionTopics');
const dates = require('../models/date');


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

router.post('/keyNote',(req,res) => {
    const newSchedule = new keyNotes(req.body);
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

router.post('/organization',async(req,res) => {
    try{
        console.log(req.body);
        const data = new organization(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

router.post('/advisory',async(req,res) => {
    try{
        console.log(req.body);
        const data = new advisory(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

router.post('/contributionTopics',async (req,res) => {
    try{
        console.log(req.body);
        const data = new contributionTopics(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

router.post('/dates',async (req,res) => {
    try{
        console.log(req.body);
        const data = new dates(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;