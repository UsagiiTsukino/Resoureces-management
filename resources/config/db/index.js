const mongoose = require('mongoose')
async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB_Dev');
        console.log("Connect Successfully");
    } catch (error) {
        console.log("Connect Fallure");
    }
    
}

module.exports = { connect }