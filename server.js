const express = require("express");
const app  = express();
const db = require("./db"); 
const bodyParser = require("body-parser");
const path = require("path");
const { error } = require("console");
// Updated port
const port = 3000;

// Middleware
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "/views")); 

// Dashboard
app.get("/",(req,res)=>{
    try{
        res.render("dashboard")
    }catch(err){
        res.status(500).json({error: "Internal server error"});
        console.log(err);
    }
});

// Celebrate page
app.get("/celebration",(req,res)=>{
  try{
    res.render("celebration")
  }catch(err){
    console.log(err);
    res.status(500).json({error: "Internal server error"});
  }
});

// Import router
const formRoute = require("./routes/formRoute");
const loginRoute = require("./routes/login");
// Use  router
app.use("/form",formRoute);
app.use("/login",loginRoute);

// app.get("/",(req,res)=>{
//   try{
//       res.render("login");
//   }catch(err){
//       console.log(err);
//       res.status(500).json({error: "Internal server error"});
//   }
// });

// app.get("/form",(req,res)=>{
//   try{
//       res.render("form");
//   }catch(err){
//       res.status(500).json({error: "Internal server error"});
//       console.log(err);
//   }
// });

// app.get("/celebration",(req,res)=>{
//   try{
//     res.render("celebration")
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error: "Internal server error"})
//   }
// })

app.listen(port,()=>console.log(`App is listening on port: ${port}`));