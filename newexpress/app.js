const express  = require("express")
const path = require("path");
const fs = require("fs")
const app=express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static file
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('view ',path.join(__dirname,'views')) //set the view directory

//END POINTS
app.get('/',(req,res)=>{
    const con = "This is the content of Web dev"
    const params = {'title':'Pubg  is the best game',"content":con}
    res.status(200).render('index',params)
})
app.post('/',(req,res)=>{
    Name = req.body.Name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    about = req.body.about
    let outputToWrite = `The name  of the client is ${Name},${age} year old,${gender},resident at ${address},More about him/her:${about}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':'Your form has been sumbitted succesfully'}
    res.status(200).render('index',params)

})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The Application started succesfully on port ${port}`);
}) 