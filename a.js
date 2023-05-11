const express =require("express");
const mongoose = require('mongoose');
const app=express()
mongoose.connect("mongodb://localhost:27017/test",{
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



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harryKart',{useNewUrlparser:true,useUnifiedTopolgy:true});

var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    // we are connected!
    console.log("We are connected...")
});
