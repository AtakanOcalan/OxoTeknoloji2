const mongoose = require('mongoose')

const apkInstagramModel = new mongoose.Schema({
    variantid:{
        type:String,
        required:true
    },
    architecture:{
        type:String,
        required:true
    },
    minimumVersion:{
        type:String,
        required:true
    },
    screenDPI:{
        type:String,
        required:true
    },
    relasedate:{
        type:String,
        required:true
    }
})

const apkInsta = mongoose.model('apkInsta',apkInstagramModel)
module.exports = apkInsta
