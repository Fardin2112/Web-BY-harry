const express  = require("express")

const app=express();
const port = 80;

app.get("/",(req,res)=>{
    res.send("This is my firt  express  app ")
});

app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`)
})