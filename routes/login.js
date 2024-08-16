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

module.exports = router;