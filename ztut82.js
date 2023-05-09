// searching data in mongo db
// this is name
use harryKart

// this query will give all the objects withn rating 4.5
db.items.find({rating:4.5})
//for finding obj greater than 4.5 rating
db.items.find({rating:{$gte:4.5}})
// or if just want to find greater than 
db.items.find({rating:{$gt:4.5}})

// And opertaor
db.items.find({rating:{$gt:4.5},price:{$gt:50000}})

// for less than or greater than
db.items.find({qty:{$lt:600},price:{$gt:10000}})

// or operator
db.items.find({$or:[{rating:{$lt:4.3}},{price:{$gt:100000}}]})

// if you want find just one operator
db.items.find({qty:{$gt:500}},{qty:1})