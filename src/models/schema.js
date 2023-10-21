const mongoose = require('mongoose')

const UKSchema = new mongoose.Schema({
        myName: String,
        myEmail: String,
        mySubject: String,
        myDescription: String,
})

const UKModel = mongoose.model("data", UKSchema)

module.exports = UKModel;