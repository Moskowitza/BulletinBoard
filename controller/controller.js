var express = require("express");

var router = express.Router();

//for stitching paths together, not sure we'll use it with handlebars
var path = require("path");
// Import the model (post.js) to use its database functions.
var db = require("../models");

// create an association between tables
// const Post = this.sequelize.define('posts');
// const Neighborhood  = this.sequelize.define('neighborhoods');

// Post.belongsTo(Neighborhood); 
// Will add a neighborhoodID attribute to Player to hold the primary key value for Team

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  // NG - changed Post to Hood testing accessing neighborhood table
  db.Hood.findAll({}).then(function (data) {
    var hbsObject = {
      neighborhoods: data
    };
    res.render("index", hbsObject);
  });
});

router.get("/newpost/:id", function (req, res) {
  // NG - changed Post to Hood testing accessing neighborhood table
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    rank: req.body.rank,
    hoodID: req.param.id
  }).then(function (dbPost) {
    console.log(res.json(dbPost));
   });
  res.render("newpost");
});

//This Path is for adding new to the Post Table (this works)
router.post("/api/new", function (req, res) {
  console.log("new post");
  console.log(req.body);

  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    rank: req.body.rank,
    hoodID: req.body.hoodID
  }).then(function (result) {
    // Send back the ID of the new Post
    res.end();
  });
});

//path to get neighborhood page
router.get("/hoods/:id", function (req, res) {
  // query the database for hood where the ID matches
  console.log("R E Q Params ID" +req.params.id)
  db.Hood.findOne({
    where: {
      id: req.params.id
    },
    // include: [db.Post]
  }).then(function (data) {
    console.log("D A T A: "+data)
    var hbsHood = {
      neighborhoods: data
    }
    console.log("SELECTED hbsHood is: "+hbsHood);
    res.render("hoods", hbsHood);
  });
});
  // //path to get neighborhood page
  // router.get("/api/hoods/:id", function (req, res) {
  //   // query the database for hood where the ID matches
  //   db.Hood.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function (dbHood) {
  //     var hbsHood = {
  //       neighborhoods: data
  //     };
  //     //     res.json(hbsHood);
  //     //     res.sendFile("hoods.handlebars");
  //     res.render("hoods", hbsObject);
  //   });
  // });







  // router.put("/api/models/post/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   console.log("condition", condition);

  //   db.Post.update({
  //     rank: req.body.rank
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });



  // Export routes for server.js to use.
  module.exports = router;
