const express = require("express");
const ejs = require("ejs");


const app = express();

app.set("view engine", "ejs");


app.use(express.static("public"));



app.get("/",function(req,res){
  res.render("homepage");
});

app.listen(3000, function() {
  console.log("port 3000 has been started");
});
