const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todo_list');

const db = mongoose.connection;

db.on('error', console.error.bind('error in database'));

db.once('open', function(){
    console.log('Successfully connected to database');
})