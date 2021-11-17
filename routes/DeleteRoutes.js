const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const verifyJWT = require('../middleware/common');
const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');
const image = require('../models/image');
var fs = require("fs");

router.delete('/schedule/:id',verifyJWT,(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

        Schedule.findOneAndDelete({_id:id},function(err,data){
        if(err){
            res.status(404).send({
                msg:`Cannot Delete Schedule with ID:${id}`
            })
        }else{
            console.log(data);
            res.send({
                msg:"Schedule was Deleted Sucessfully"
            })
        }
    })
})

router.delete('/keyNote/:id',verifyJWT,(req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);

        keyNotes.findOneAndDelete({_id:id},function(err,data){
        if(err){
            res.status(404).send({
                msg:`Cannot Delete keyNotes with ID:${id}`
            })
        }else{
            console.log(data);
            res.send({
                msg:"KeyNotes was Deleted Sucessfully"
            })
        }
    })
})

router.delete('/image/:id',verifyJWT,async (req,res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const filenames =  image.find({_id:id}).select("filename").then((data) => {
        console.log(data[0].filename);
        const dest = './uploads/' + data[0].filename;
        fs.unlink(dest,(err) => {
            if (err) {
            return console.error(err);
         }
         console.log("File deleted successfully!");
        })
    });

    image.findOneAndDelete({_id:id},function(err,data){
        if(err){
            res.status(404).send({
                msg:`Cannot Delete Image with ID:${id}`
            })
        }else{
            // console.log(data);
            res.send({
                msg:"Image was Deleted Sucessfully"
            })
        }
    })
})

module.exports = router;