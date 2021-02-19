var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Handlebars Routes
  //===============================================
  app.get("/id/:id", function (req, res) {
    let id = req.params.id;
    res.redirect("/user?valid=" + id);
  });

  app.get("/user", function (req, res) {
    res.render("index", { user: req.user.id, userName: req.user.first_name });
  });

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/drumpad", function (req, res) {
    if (req.user) {
      res.render("fullDrumpad", {
        user: req.user.id,
        userName: req.user.first_name,
      });
    } else {
      res.render("fullDrumpad");
    }
  });

  app.get("/artist/:id", function (req, res) {
    db.Artists.findOne({
      where: {
        id: req.params.id,
      },
      order: [[{ model: db.Blogs }, "createdAt", "DESC"]],
      include: [db.Blogs, db.Extras, db.Mixes],
    }).then((data) => {
      if (data.dataValues.Mixes) {
        for (let i = 0; i < data.dataValues.Mixes.length; i++) {
          if (data.dataValues.Mixes[i].id === 1) {
            data.dataValues.Mixes[i].isActive = true;
          }
        }
      }
      res.render("view-profile", {
        artist: data.dataValues,
        blog: data.dataValues.Blogs,
        extras: data.dataValues.Extras,
        mixes: data.dataValues.Mixes,
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });

  app.get("/user/:id", function (req, res) {
    db.Artists.findOne({
      where: {
        id: req.params.id,
      },
      order: [[{ model: db.Blogs }, "createdAt", "DESC"]],
      include: [db.Blogs, db.Extras, db.Mixes],
    }).then((data) => {
      res.render("profile", {
        artist: data.dataValues,
        blog: data.dataValues.Blogs,
        extras: data.dataValues.Extras,
        mixes: data.dataValues.Mixes,
        user: data.dataValues.id,
        userName: req.user.first_name,
      });
    });
  });

  // Find all Artists, or by Genre and Location

  app.get("/artists", function (req, res) {
    db.Artists.findAll({}).then(function (dbArtists) {
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("all-artists", {
        artists: unpack(dbArtists),
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });

  app.get("/artists/genre/:genre", function (req, res) {
    db.Artists.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then(function (dbArtists) {
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("search", {
        artists: unpack(dbArtists),
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });

  app.get("/artists/city/:city", function (req, res) {
    db.Artists.findAll({
      where: {
        city: req.params.city,
      },
    }).then(function (dbArtists) {
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("search", {
        artists: unpack(dbArtists),
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });
};
