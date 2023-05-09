// deleating items from mongodb databse
use harrykart
db.items.find({price:22000})

// for deleting one 
// deleteOne will delete the matching entry and will delete the first  entry in case of multi document match  
db.items.deleteOne({price:22000})

// if you want to delete all
db.items.deleteMany({price:22000})