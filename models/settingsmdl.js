const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
    job_roles: {
        type: String
    }
});

const settings = mongoose.model("setting",settingSchema);

module.exports = settings;