const express = require("express");
const router = express.Router();
const settings = require("../models/settingsmdl");  // Import the Settings model

// GET route to render the form
router.get("/", async (req, res) => {
    try{
        res.render("settings");  // Render the EJS file
    }catch(err){
        res.status(500).json({error: "Internal server error"})
    }
});

// POST route to handle form submission
router.post("/", async (req, res) => {
    const { job_roles } = req.body;
    try{
        const newSetting = new settings({
            job_roles
        })
        await newSetting.save();
    }catch(err){
        console.log(err);
    }

    res.redirect("/");  // Redirect to the settings page after saving
});

module.exports = router;
