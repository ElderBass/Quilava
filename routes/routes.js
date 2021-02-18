//route for home --> res.render index (landing page)
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

  //add get route for rendering the 'view only' artist page
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
    console.log("inside api/artist/:id get");
    console.log(req.session);
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

  app.get("/drumpad", function (req, res) {
    res.render("fullDrumpad");
  });
  //================================================

  // Find all Artists, or by Genre and Location
  //================================================
  app.get("/artists", function (req, res) {
    console.log("inside /aritsts");
    console.log(req.user);
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
    console.log("req.params ", req.params.genre);
    console.log("req.user.id = ", req.user.id);
    db.Artists.findAll({
      where: {
        genre: req.params.genre,
      },
    }).then(function (dbArtists) {
      console.log(JSON.parse(JSON.stringify(dbArtists)));
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("search", {
        artists: unpack(dbArtists),
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });

  app.get("/artists/city/:city", function (req, res) {
    console.log("inside city search");
    db.Artists.findAll({
      where: {
        city: req.params.city,
      },
    }).then(function (dbArtists) {
      console.log(JSON.parse(JSON.stringify(dbArtists)));
      let unpack = (dbArtists) => JSON.parse(JSON.stringify(dbArtists));
      res.render("search", {
        artists: unpack(dbArtists),
        user: req.user.id,
        userName: req.user.first_name,
      });
    });
  });

  // Login and Signup Routes
  //=============================================
  app.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("inside api/login post");
    
    console.log("req.body =", req.body);
    console.log("req.user =", req.user);

    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  app.post("/api/signup", (req, res) => {
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
        res.redirect(307, "/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

    // Route for logging user out
    app.get("/logout", (req, res) => {
      req.logout();
      res.redirect("/");
    });

  //Blog Post routes
  //==================================================
  app.post("/api/artists/blog", function (req, res) {
    console.log("req.body");
    console.log(req.body);

    db.Blogs.create({
      title: req.body.title,
      body: req.body.body,
      ArtistId: req.body.ArtistId
    }).then(function (data) {
      console.log("query data in routes");
      console.log(data);
      res.json(data);
    });
  });

  app.put("/api/artists/blog/:id", function (req, res) {
    console.log("put request req.params");

    let id = parseInt(req.params.id);

    db.Blogs.update(req.body, {
      where: {
        id: id,
      },
    }).then(function (result) {
      console.log("result from put request:");
      console.log(JSON.parse(result));
      res.send(result);
    });
  });

  app.delete("/api/artists/blog/:id", function (req, res) {
    console.log("delete request req.params");

    let id = parseInt(req.params.id);

    db.Blogs.destroy({
      where: {
        id: id,
      },
    }).then(function (result) {
      console.log("result from delete request:");
      console.log(result);
      res.end();
    });
  });

  // Extras Routes
  //==========================================================
  app.post("/api/artists/extras", function (req, res) {
    console.log("req.body for extras post request");
    console.log(req.body);

    db.Extras.create({
      github: req.body.github,
      twitch: req.body.twitch,
      favorite_mix: req.body.favorite_mix,
      bio: req.body.bio,
      ArtistId: req.body.ArtistId,
    }).then(function (data) {
      console.log("query data in extras post route .then");
      console.log(data);
      res.json(data);
    });
  });

  app.put("/artists/extras", function (req, res) {
    console.log("put request forEXTRAS REMIX");
    console.log(req.body);
    db.Extras.update(req.body, {
      where: {
        ArtistId: req.user.id,
      },
    }).then(function (result) {
      console.log("result from EXTRAS PUT :");
      console.log(JSON.parse(result));
      res.send(result);
    });
  });

  //Mixes Routes
  //=================================================
  app.post("/api/artists/mixes", function (req, res) {
    console.log("req.body for adding mixes = ");
    console.log(req.body);
    let artistId = parseInt(req.body.ArtistId);
    db.Mixes.create({
      url: req.body.url,
      name: req.body.name,
      ArtistId: artistId,
    }).then(function (result) {
      console.log("query data in MIXES post route .then");

      console.log(result.dataValues.ArtistId);
      res.json(result.dataValues.ArtistId);
    });
  });

  app.delete("/delete/mix", function (req, res) {
    console.log("mix delete request req.body");
    console.log(req.body);

    db.Mixes.destroy({
      where: {
        url: req.body.url,
      },
    }).then(function (result) {
      console.log("result from delete request:");
      console.log(result);
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
