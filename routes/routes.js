//route for home --> res.render index (landing page)
var db = require("../models");

module.exports = function (app) {


  // Handlebars Routes
  //===============================================
  app.get('/', function(req, res){
      res.render('index');
  })  

  // Find all Authors and return them to the user with res.json
  app.get("/api/authors", function (req, res) {
    db.Artists.findAll({}).then(function (dbArtists) {
      res.render("index", { artists: dbArtists });
    });
  });

  app.get("/api/authors/:genre", function (req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Artists.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then(function (dbArtists) {
      res.render("index", { artists: dbArtists });
    });
  });

//   app.post("/api/authors", function (req, res) {
//     // Create an Author with the data available to us in req.body
//     console.log(req.body);
//     db.Author.create(req.body).then(function (dbArtists) {
//       res.redirect("307", "/api/login");
//     });
//   });

  app.post("/api/login",/* passport.authenticate("local"),*/ (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.artist.email,
      id: req.artist.id

    });
  });

  app.post("/api/signup", (req, res) => {
    db.Artist.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      stage_name: req.body.stage_name,
      genre: req.body.genre,
      city: req.body.city
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};
