const mongoose = require("mongoose");
// Define emploly Schema
const emplolySchema  = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String
    },
    Address: {
        type: String
    },
    experience: {
        type: Number,
        enum: ["1","2","3"]
    },
    uniqueId: {
        type: String
    },
    jobRole: { 
        type: String,
        enum: ["Frontend Engineer","Backend Enginer","Fullstack Engineer"]
    }
});
// Create employ Model
const emploly = mongoose.model("employ",emplolySchema);

module.exports = emploly;
