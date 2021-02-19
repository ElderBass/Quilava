var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  //Blog Post routes
  //==================================================
  app.post("/api/artists/blog", function (req, res) {
    db.Blogs.create({
      title: req.body.title,
      body: req.body.body,
      ArtistId: req.body.ArtistId,
    }).then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/artists/blog/:id", function (req, res) {
    let id = parseInt(req.params.id);

    db.Blogs.update(req.body, {
      where: {
        id: id,
      },
    }).then(function (result) {
      res.send(result);
    });
  });

  app.delete("/api/artists/blog/:id", function (req, res) {
    let id = parseInt(req.params.id);

    db.Blogs.destroy({
      where: {
        id: id,
      },
    }).then(function (result) {
      res.end();
    });
  });

  // Extras Routes
  //==========================================================
  app.post("/api/artists/extras", function (req, res) {
    db.Extras.create({
      github: req.body.github,
      twitch: req.body.twitch,
      favorite_mix: req.body.favorite_mix,
      bio: req.body.bio,
      ArtistId: req.body.ArtistId,
    }).then(function (data) {
      res.json(data);
    });
  });

  app.put("/artists/extras", function (req, res) {
    db.Extras.update(req.body, {
      where: {
        ArtistId: req.user.id,
      },
    }).then(function (result) {
      res.send(result);
    });
  });

  //Mixes Routes
  //=================================================
  app.post("/api/artists/mixes", function (req, res) {
    let artistId = parseInt(req.body.ArtistId);
    db.Mixes.create({
      url: req.body.url,
      name: req.body.name,
      ArtistId: artistId,
    }).then(function (result) {
      res.json(result.dataValues.ArtistId);
    });
  });

  app.delete("/delete/mix", function (req, res) {
    db.Mixes.destroy({
      where: {
        url: req.body.url,
      },
    }).then(function (result) {
      res.end();
    });
  });

  //Profile Picture PUT route
  //========================================
  app.put("/artists/image", function (req, res) {
    console.log("put request for PROFILE PIC");
    console.log(req.body);
    db.Artists.update(req.body, {
      where: {
        id: req.user.id,
      },
    }).then(function (result) {
      console.log("result from put request:");
      console.log(JSON.parse(result));
      res.send(result);
    });
  });
};
