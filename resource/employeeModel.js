const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    desc:{
        type:String,
    }
})

const Employee = mongoose.model("Employee",employeeSchema)

module.exports = Employee