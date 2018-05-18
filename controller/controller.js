var express = require("express");

var router = express.Router();

// Import the model (post.js) to use its database functions.
var db = require("../models");

// create an association between tables
// const Post = this.sequelize.define('posts');
// const Neighborhood  = this.sequelize.define('neighborhoods');

// Post.belongsTo(Neighborhood); 
// Will add a neighborhoodID attribute to Player to hold the primary key value for Team

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // NG - changed Post to Hood testing accessing neighborhood table
  db.Hood.findAll({}).then(function(data) {
    var hbsObject = {
      neighborhoods: data
    };
    // console.log("D A T A " +data)
    // console.log("path: "+hbsObject.neighborhoods[0].dataValues.name);
    res.render("index", hbsObject);
  });
});

router.post("/api/new", function(req, res) {
  console.log("new post");
  console.log(req.body);

  db.Post.create({
    title:req.body.title, 
    body: req.body.body, 
    rank: req.body.rank,
    hoodID: req.body.hoodID
  }).then(function(result) {
    // Send back the ID of the new quote
    res.end();
  });
});

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
