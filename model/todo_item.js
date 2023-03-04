const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    Item : {
        type : String,
        required : true
    }
});

const item = mongoose.model('item' , itemSchema);

module.exports = item;