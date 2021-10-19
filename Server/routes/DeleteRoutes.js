const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const verifyJWT = require('../middleware/common');
const Schedule = require('../models/Important_Dates')
const keyNotes = require('../models/keyNotes');
const paragraph = require('../models/paragraphs');

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

module.exports = router;