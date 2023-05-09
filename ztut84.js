// for update in mongodb database
db.items.updateOne({name:"samsung 30S"},{$set:{price:10000}})

// for many updates
db.items.updateMany({name:"samsung 30S"},{$set:{price:9000,rating:3}})

// note : for create new file type
// use fardinKart
// here FadinKart is name