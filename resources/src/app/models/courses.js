const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Course = new Schema ({
    author : {type : String, maxlength : 255},
    description : {type : String},
    image : {type : String},
    slug : {type : String},
    createAt : {type : Date, default : Date.now},
    updateAt : {type : Date, default : Date.now},
})

module.exports = mongoose.model('Course', Course)