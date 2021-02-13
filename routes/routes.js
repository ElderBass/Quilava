//route for home --> res.render index (landing page)
var db = require("../models");

module.exports = function (app) {
  // Handlebars Routes
  //===============================================
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/api/artist/:id", function (req, res) {
    //console.log(req);
    console.log("inside get route for artist/:id");
    db.Artists.findOne({
      where: {
        id: req.params.id,
      },
    }).then((data) => {
      console.log("data from findOne query = "+data);
      console.log(JSON.stringify(data));
      res.render("profile", { artist: data.dataValues });
    });
  });
  //================================================

  // Find all Authors and return them to the user with res.json
  app.get("/api/artists", function (req, res) {
    db.Artists.findAll({}).then(function (dbArtists) {
      res.render("index", { artists: dbArtists });
    });
  });

  app.get("/api/artists/:genre", function (req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Artists.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then(function (dbArtists) {
      res.render("index", { artists: dbArtists });
    });
  });

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
        console.log("data in routes = ");
        console.log(data.dataValues);

        console.log(`Created new user!`);
        //res.redirect(307, "/profile");
        res.json(data.dataValues.id);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
};
