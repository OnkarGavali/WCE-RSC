const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/common');
const multer = require('multer');
const path = require('path');

const Schedule = require('../models/Important_Dates')
const keyNote = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');
const organization = require('../models/organization');
const advisory = require('../models/advisory');
const contributionTopics = require('../models/contributionTopics');
const dates = require('../models/date');
const registration = require('../models/registration');
const image = require('../models/image');
const posterPresentation = require('../models/posterPresentation');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        req.file = file;
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const uploads = multer({storage:storage});

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

router.post('/organization',verifyJWT,async(req,res) => {
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

router.post('/keynote',verifyJWT,async(req,res) => {
    try{
        console.log(req.body);
        const data = new keyNote(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

router.post('/advisory',verifyJWT,async(req,res) => {
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

router.post('/contributionTopics',verifyJWT,async (req,res) => {
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

router.post('/dates',verifyJWT,async (req,res) => {
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

router.post('/registration',verifyJWT,async (req,res) => {
    try{
        console.log(req.body);
        const data = new registration(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

router.post('/image',verifyJWT,uploads.single('Image'),async (req,res) => {
     console.log(req.file);
    const data = new image({
        imagetype:req.body.imageType,
        imageURL:req.file.path,
        filename:req.file.filename
    });
    await data.save();
    res.send('Image uploaded');
})

router.post('/posterPresentation',verifyJWT,async(req,res) => {
    try{
        console.log(req.body);
        const data = new posterPresentation(req.body);
        await data.save();
        res.status(200).json({success:true, data });
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;