const express =require("express") 
const mongoose =require("mongoose");

const url = 
    "mongodb+srv://admin:pass@cluster0.vklwrjd.mongodb.net/?retryWrites=true&w=majority"

async function run() {
  try {
    await mongoose.connect(url)
    console.log("connected")   
  } catch(error){
    console.log(error)
  }
}

connect();

const app = express()
app.listen(4000,()=>{
    console.log("listen on port 4000");
});


