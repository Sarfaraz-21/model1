const express = require("express");
const router = express.Router();
const employ = require("../models/employModel");

router.get("/",(req,res)=>{
    try{
        res.render("form");
    }catch(err){
        res.status(500).json({error: "Internal server error"});
        console.log(err);
    }
});

// Route to handle registration form submission
router.post("/celebration", async (req, res) => {
    const { name, age, email, mobileNumber, Address, experience, uniqueId, jobRole } = req.body;

    try {
        const newEmployee = new employ({
            name,
            age,
            email,
            mobileNumber,
            Address,
            experience,
            uniqueId,
            jobRole,
        });

        await newEmployee.save();
        console.log("data is saved");
        
        res.redirect('/celebration');
    } catch (error) {
        console.error('Error saving employee:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;