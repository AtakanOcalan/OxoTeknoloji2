const express = require('express')
const router = express.Router()
const apkInsta = require('../model/apkInstagramModel')

router.route('/addapkInsta').post(async(req,res)=>{
    try {
        await apkInsta.create(req.body)
        res.status(200).json({message:'apkInsta added !',status:true})
    } catch (error) {
        res.status(500).json({message:error.message,status:false})
    }
})
router.route('/getAllapkInsta').get(async(req,res)=>{
    try {
        const apkinsta = await apkInsta.find({})
        res.status(200).json({apkinsta: apkinsta,status:true})
    } catch (error) {
        res.status(500).json({message:error.message,status:false})
    }
})
router.route('/getApkInsta').get(async(req,res)=>{
    try {
        const {id} = req.body
        const apkinsta = await apkInsta.find(id)
        res.status(200).json({apkinsta})
    } catch (error) {
        res.status(500).json({message:error.message,status:false})
    }
})
router.route('/deleteApkInsta/:variantid').delete(async(req, res) => {
    const { variantid } = req.params;
    try {
      const apkinsta = await apkInsta.findOneAndDelete({ variantid });
      if (apkinsta) {
        res.json({ message: 'Apk Başarı ile silindi.', apkinsta });
      } else {
        res.status(404).json({ message: 'APK bulunamadı.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
router.route(`/updateApkInsta/:id`).put(async(req,res)=>{
    const {id} = req.params
    const {variantid,architecture,minimumVersion,screenDPI,relasedate} = req.body
    try {
        const apkinsta = await apkInsta.findByIdAndUpdate(id,{variantid,architecture,minimumVersion,screenDPI,relasedate},{new:true})
        res.json(apkinsta)
        if(!apkinsta){
            return res.status(404).json({message:'ApkInsta not found !'})
        }
    } catch (error) {
        res.status(500).json({message:error.message,status:false})
    }
})


module.exports = router