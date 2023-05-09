// inserting data in mongo db
// this is name
use harryKart

// for inserting Single data in mongo db data base
db.items.insertOne({name:"samsung 30S",price:22000,rating:4.5,qty:233,sold:98})

// for inserting multiple data in mongo db data base
db.items.insertMany([{name:"samsung 30S",price:22000,rating:4.5,qty:233,sold:98},{name:"iphone14",price:150000,rating:4.7,qty:2233,sold:980},{name:"vivo 15y",price:18500,rating:4.8,qty:500,sold:400}])



// in mongo db terminal
use harrykart //after this we enter into test to our file
db.items.find() // used to see our All datas




// note :for paste in powershell terminal just click right side of the mouse