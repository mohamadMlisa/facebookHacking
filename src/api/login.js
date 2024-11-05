const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors()); // Add this line to use the cors middleware
app.set('view engine',"ejs");


app.get("/login",(req,res)=>{
    res.render("index")
})
app.listen(3000, () => {
  console.log("connect success");
});
