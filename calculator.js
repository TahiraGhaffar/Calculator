const express = require("express");   //"express" is a module which is being imported here
 // const express  is a variable
const bodyParser = require("body-parser");


const app = express(); //calling express()  function from "express" MODULE IMPORTED ABOVE
app.use(bodyParser.urlencoded( {extended : true})); //bodyParser parses the URL i.e here http


app.get("/", function(req, res){  //    "/"  is called ROUTE here telling path, here "/" means ROOT PATH/HOME PAGE  
    res.sendFile(__dirname + "/index.html"); // __dirname tells CURRENT PATH of file being located, no matter on whatever
    //server we are at, it will detect 'index.html' files current path on that computer easily
});

app.post("/", function(req, res){  //this post function mandatory to SEND BACK RESPONSE ONTO SERVER
    // "/" tells post request came on ROUTE PAGE, means POST response was asked on ROUTE PAGE
    //console.log(req.body); //this requests to parse "FORM DATA" into console

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of calculation is "+result); 
});

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is "+bmi);
});


app.listen(5000, function(){ //means when our request got listened
    console.log("Server is running on port 5000");
});