// REQUİRE
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//Cors 
app.use(cors({
    origin: '*'
}))

//MODEL
const apkInsta = require('./model/apkInstagramModel')

//ROUTER
const apkInstagramRouter = require('./router/apkInstagramRouter')

//MONGODB CONNECTİON
mongoose.connect('mongodb+srv://atakanjus0v:23102002Atakan@atakan1.pdsd9dz.mongodb.net/?retryWrites=true&w=majority&appName=Atakan1').then(()=>{
    console.log('MongoDB connected !')
}).catch(error => console.log(error))

app.use(express.json())

//START POİNT
app.get('/',(req,res)=>{
    console.log('Node server worked !')
    res.send('Node server worked !')
})

//ROUTER
app.use('/apk',apkInstagramRouter)

//APP ANABLE 
app.listen('3001')