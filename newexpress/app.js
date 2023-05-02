const express  = require("express")
const path = require("path");
const app=express();
const port = 80;

//For serving static file
app.use('/static', express.static('static'))

//set the template engine as pug
app.set('view engine','pug')

//set the view directory
app.set('view ',path.join(__dirname,'views'))

//our pug demo
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey Fardin', message: 'How are You r u feeling good now!' })
});

app.get("/",(req,res)=>{
    res.status(200).send("This is my home page ");
});

app.get("/",(req,res)=>{
    res.send("This is my express  app ,bit difficult to understand ");
});

app.post("/about",(req,res)=>{
    res.send("this is my post about page");
});

app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`);
}) 