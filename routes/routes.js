//route for home --> res.render index (landing page)
var db = require("../models");

module.exports = function (app) {
  // Handlebars Routes
  //===============================================
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/api/artist/:id", function (req, res) {
    db.Artists.findOne({
      where: {
        id: req.params.id,
      },
    }).then((data) => {
      res.render("profile", { artist: data.dataValues });
    });
  });
  //================================================

  // Find all Artists, or by Genre and Location
  //================================================
  app.get("/api/artists", function (req, res) {
    db.Artists.findAll({}).then(function (dbArtists) {
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("all-artists", { artists: unpack(dbArtists) });
    });
  });

  app.get("/api/artists/genre/:genre", function (req, res) {
    
    console.log(req.params.genre)
    db.Artists.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then(function (dbArtists) {
      console.log(JSON.parse(JSON.stringify(dbArtists)));
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
     res.render("search", { artists: unpack(dbArtists) });
    });
  });

  app.get("/api/artists/city/:city", function (req, res) {
    
    console.log(req.params.city)
    db.Artists.findAll({
      where: {
        city: req.params.city,
      },
    }).then(function (dbArtists) {
      console.log(JSON.parse(JSON.stringify(dbArtists)));
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
     res.render("search", { artists: unpack(dbArtists) });
    });
  });


  //=============================================
  app.post(
    "/api/login",
    /* passport.authenticate("local"),*/ (req, res) => {
      // Sending back a password, even a hashed password, isn't a good idea

      console.log("inside api/login post");

      console.log(req.body);
      res.json({
        email: req.body.email,
        id: req.body.id,
      });
    }
  );

  app.post("/api/signup", (req, res) => {
    console.log("req.body =", req.body);
    db.Artists.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      stage_name: req.body.stage_name,
      genre: req.body.genre,
      city: req.body.city,
    })
      .then((data) => {
        res.json(data.dataValues.id);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
};
