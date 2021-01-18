const express = require('express');
const bodyParser = require('body-parser') //bodyParser
const app = express();
app.use(bodyParser.urlencoded ({extended: true})); //bodyParser
app.get("/", function(req, res){ // req & res are good code practice
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

  var num1 = Number(req.body.n1); //turns into number
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("The result is " + result);
});
app.listen(3000, function(){
  console.log ("server started on port 3000");
});
