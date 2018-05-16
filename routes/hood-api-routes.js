var db = require("../models");

module.exports = function(app) {
  app.get("/api/hoods", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hood.findAll({
      include: [db.Post]
    }).then(function(dbHood) {
      res.json(dbHood);
    });
  });

  app.get("/api/hoods/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Hood.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbHood) {
      res.json(dbHood);
    });
  });

  app.post("/api/hoods", function(req, res) {
    db.Hood.create(req.body).then(function(dbHood) {
      res.json(dbHood);
    });
  });

  app.delete("/api/hoods/:id", function(req, res) {
    db.Hood.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbHood) {
      res.json(dbHood);
    });
  });
};
