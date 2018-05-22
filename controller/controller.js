var express = require("express");

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
    res.render("index", hbsObject);
  });
});

//2) Go to a NewPost page NO LONGER associated with the neighborhood (use hbs for drop down)
router.get("/newpost/", function (req, res) {
  db.Hood.findAll({}).then(function (data) {
    var hbsObject = {
      neighborhoods: data
    };
    // NG - changed Post to Hood testing accessing neighborhood table
    res.render("newpost", hbsObject);
  });
});


//3) api/new is for adding new to the Post Table 
//this works and we're getting the correct association
router.post("/api/new", function (req, res) {
  console.log("newpost");
  console.log(req.body);

  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    rank: req.body.rank,
    HoodId: req.body.HoodID
  }).then(function (result) {
    // Send back the ID of the new Post
    res.end();
  });
});

//4) Neighborhood page and 
// WORKS! includes Name in the header and relevant posts
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
    console.log(data)
    var hbsPosts = {
      posts: data
    }
    // var hoodName = hbsPosts.posts[0].Hood.name;
    console.log("SELECTED hbsHood is: " + JSON.stringify(hbsPosts));
    // console.log("hood name: " + hoodName)
    res.render("hoods", hbsPosts);

    // console.log("SELECTED hbsHood is: " + hbsHood);
    // // Need to access this in client side js
    ///AARON COMMENTS: this is now hbsPosts.posts[0].Hood.lat 
    ///HOWEVER it may still not load in the view
    ///I would suggest a NEW ROUTE just for the MAP
    // lat = hbsHood.neighborhoods.lat;
    // lng = hbsHood.neighborhoods.lng;
    // console.log(lat + " " + lng);
    // res.render("hoods", hbsHood);
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


// //path to get Posts
// router.get("/hoods/:id", function(req, res) {
//   var query = {};
//   if (req.query.HoodID) {
//     query.HoodId = req.query.HoodID;
//   }
//   // Here we add an "include" property to our options in our findAll query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Author
//   db.Post.findAll({
//     where: query,
//     include: [db.Hood]
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

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



// Export routes for server.js to use.
module.exports = router;
