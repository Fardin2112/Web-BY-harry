const express  = require("express")

const app=express();
//here const port will be 80

app.get("/",(req,res)=>{
    res.send("This is my firt  express  app man ");
});

app.get("/about",(req,res)=>{
    res.send("this is my about page man");
});

app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`);
})