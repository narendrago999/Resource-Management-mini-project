const mongoose = require("mongoose")


const billSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    desc:{
        type:String,
    },
    date:{
        type:String,
    }
})

const Billed = mongoose.model("Billed",billSchema)

module.exports = Billed