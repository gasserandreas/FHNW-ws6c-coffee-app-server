// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
    firstname: String,
    surname: String,
    coffeeCounter: String,
}));

/*
coffeeCounter: 
 firstname: 
 id: 
 school: 
 surname: 
 */