var express = require("express");

var router = express.Router();

// Import the model (post.js) to use its database functions.
var post = require("../models/")["Post"];

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  post.all(function(data) {
    var hbsObject = {
      post: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("../api/models/post", function(req, res) {
  post.create([
    "title", "body"
  ], [
    req.body.title, req.body.body
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/models/post/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  post.update({
    rank: req.body.rank
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
