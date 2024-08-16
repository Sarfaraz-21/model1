const mongoose = require("mongoose");
// Define user Schema
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model("user",usersSchema);
module.exports = user;