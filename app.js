const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/dbname'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
const app = express();

app.use(express.json())
const r = require('./controller/controller')
app.use('/student',r)

con.on('open',function(){
    console.log("random text")
})

app.listen(9000,()=>{
    console.log("server connected")
})