const express = require("express");
const router = express.Router();
const user = require("./../models/user")

router.get("/",(req,res)=>{
    try{
        res.render("login");
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
});

// Save user email and password
router.post("/",async(req,res)=>{
    const{email,password} = req.body;
    try{
        const newUser = new user({
            email,
            password
        })

        await newUser.save();
        console.log("Email and passwor is saved");
        res.status(200).redirect("/form");
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

module.exports = router;