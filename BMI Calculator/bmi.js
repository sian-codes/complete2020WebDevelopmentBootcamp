const express = require('express');
const bodyParser = require('body-parser') //bodyParser
const app = express();
app.use(bodyParser.urlencoded ({extended: true})); //bodyParser
app.get("/", function(req, res){ // req & res are good code practice
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/", function(req, res) {

  var weight = Number(req.body.weight); //turns into number
  var height = Number(req.body.height);
  var bmi = (weight/(height*height));

  res.send("Your BMI is " + bmi);
});
app.listen(3000, function(){
  console.log ("server started on port 3000");
});

