const express =require("express");
const mongoose = require('mongoose');
const app=express()
mongoose.connect("mongodb://localhost:27017/harryKart",{
    useNewUrlparser:true,useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("succesfully connected")
    }
})

app.listen(3000,()=>{
    console.log("one port 3000!!!")
})