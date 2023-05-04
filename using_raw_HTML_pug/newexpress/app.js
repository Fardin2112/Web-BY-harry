const express  = require("express")
const path = require("path");
const app=express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static file

//PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('view ',path.join(__dirname,'views')) //set the view directory

//END POINTS
app.get('/',(req,res)=>{
    res.status(200).render()
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`);
}) 