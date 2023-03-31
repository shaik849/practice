const mongoose = require('mongoose');


const newSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
       type : String,
       required : true,
    },
    file : {
        data : String,
    },
}, {timestamps : true})


const newModel = mongoose.model('data', newSchema)

module.exports = { newModel }