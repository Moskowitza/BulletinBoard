var express = require("express");
var moment = require("moment");

var router = express.Router();


// Import the model (post.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

//1) WORKS! GET all neighborhoods and load them on the index page
router.get("/", function (req, res) {

  db.Hood.findAll({
  }).then(function (data) {
    var hbsObject = {
      neighborhoods: data
    };
    var rottenBy = moment(moment().subtract(30,'days')).format("YYYY-MM-DD HH:mm:ss");
    // // sequelize format YYYY-MM-DD HH:MM: SS
    console.log("rotten By Date" +rottenBy)
    res.render("index", hbsObject);
  });
});

//2) Go to a NewPost page NO LONGER associated with the neighborhood (use hbs for drop down)
router.get("/newpost/", function (req, res) {
  db.Hood.findAll({}).then(function (data) {
    var hbsObject = {
      neighborhoods: data
    };
    res.render("newpost", hbsObject);
  });
});


//3) api/new is for adding new to the Post Table 
//this works and we're getting the correct association
router.post("/api/new", function (req, res) {
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    location: req.body.location,
    rank: req.body.rank,
    HoodId: req.body.HoodID
  }).then(function (result) {
    // Send back the ID of the new Post
    res.end();
  });
});

//4) Neighborhood page and 
//  includes Name in the header and relevant posts
router.get("/hoods/:id", function (req, res) {
  // query the database for hood where the ID matches
  db.Post.findAll({
    where: { HoodID: req.params.id },
    include: [db.Hood],
    order: [
      ['rank','DESC'],
      ['title','ASC'],
    ]
  }).then(function (data) {
    console.log("data from hoods route "+data)
    var hbsPosts = {
      posts: data
    }
    res.render("hoods", hbsPosts);
  });

  // 5) Put request for updating votes. 
  router.put("/api/vote:id", function (req, res) {
    console.log("API ROUTE FOR VOTE HIT!!!!!")
    db.Post.update({
      rank: req.body.rank
    }, {
      where: {
        id: req.params.id
      }
      }).then(function(dbPost){
        res.json(dbPost)
      });
  });
});
//6) Getting a JSON file of posts
router.get("/postlocal", function (req, res) {
  db.Post.findAll({
  }).then(function (data) {
    var hbsObject = {
      neighborhoods: data
    };
    res.json(hbsObject);
    console.log(res.json(hbsObject))
    locationsArr=[];
  });
});
// 7) Delete moldy (not recently updated) posts
// //define cutoff date
// const Op = Sequelize.Op ?
// router.get("/api/destroyOld", function (req, res) {
  var rottenBy = moment(moment().subtract(30,'days')).format("YYYY-MM-DD HH:mm:ss");
  // // sequelize format YYYY-MM-DD HH:MM: SS
  console.log("rotten By Date" +rottenBy)
  
  // db.Post.destroy({
  //   where : {
  //     updatedAt: {[Op.lt]: rottenBy}
  //   }
  // }).then(function (data) {});
// });


// Export routes for server.js to use.
module.exports = router;
