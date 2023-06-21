const mongoose = require("mongoose")


const assignSchema = new mongoose.Schema({
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

const Assigned = mongoose.model("Assigned",assignSchema)

module.exports = Assigned