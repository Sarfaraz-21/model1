const mongoose = require("mongoose");

const databaseUrl = "mongodb://localhost:27017/model1";

mongoose.connect(databaseUrl)

.then(()=> console.log("mongoDb connected"))
.catch(err => console.error("mongoDb connection error:",err)
);

// Get the default Connection
// Mongoose maintains a Default Connection objct representing the MongoDB connection
const db = mongoose.connection;

module.exports = db;