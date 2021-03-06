/*********************************************************************************
*  WEB322 – Assignment1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Tapas Pareshbhai Vasoya
*  Student ID: 155190200
*  Date: 18/05/2022
*
*  Online (Heroku) URL: https://web-assignmnet1.herokuapp.com/
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Tapas Pareshbhai Vasoya - 155190200");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);