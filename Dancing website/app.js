const express  = require("express")
const path = require("path");
const app=express();
const mongoose=require("mongoose");
const bodyparser = require("body-parser");
// getting-started.js
const port = 8000;
const url =
    "mongodb+srv://admin:pass@cluster0.vklwrjd.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try {
      await mongoose.connect(url)
      console.log("connected");
    } catch(err){
      console.log(error);
    }
}  

connect();

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    emial: String,
    address: String,
    que: String,
  });

const contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static file
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('view ',path.join(__dirname,'views')) //set the view directory

//END POINTS
app.get('/',(req,res)=>{ 
    const params = { }
    res.status(200).render('home.pug',params)
})

app.get('/contact',(req,res)=>{ 
    const params = { }
    res.status(200).render('contact.pug',params)
})

app.post('/contact',(req,res)=>{ 
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("Your data is succesfully Saved.")
    }).catch(()=>{
        res.status(400).send("Data is failed to save")
    })

})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`);
}) 






