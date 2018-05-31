// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controller/controller.js");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//  
//   db.Hood.bulkCreate([{
//     name: "Fishtown",
//     slug: "fishtown",
//     lat: 39.972095,
//     lng: -75.129644
//   },
// {
//   name: "Old City",
//   slug: "oldcity",
//   lat: 39.952482,
//   lng: -75.143034
// },
// {
//   name: "Graduate Hospital",
//   slug: "graduatehospital",
//   lat: 39.942489,
//   lng: -75.173461
// },
// {
//   name: "Society Hill",
//   slug: "societyhill",
//   lat: 39.943731,
//   lng: -75.147841
// },
// {
//   name: "Powelton Village",
//   slug: "poweltonvillage",
//   lat: 39.962055,
//   lng: -75.192044
// },
// {
//   name: "Fairmount",
//   slug: "fairmount",
//   lat: 39.968239,
//   lng: -75.169685
// }])
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });

