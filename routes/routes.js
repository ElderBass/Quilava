//route for home --> res.render index (landing page)
var db = require("../models");

module.exports = function (app) {
  // Handlebars Routes
  //===============================================
  app.get("/", function (req, res) {
    res.render("index");
  });

  //add get route for rendering the 'view only' artist page
  app.get("/artist/:id", function (req, res) {
    db.Artists.findOne({
      where: {
        id: req.params.id,
      }, //how to order by date/newest with a join?
      include: [db.Blogs, db.Extras, db.Mixes],
      order: [["id", "DESC"]],
    }).then((data) => {
      console.log("data from 'inner join' query");
      console.log(data);
      //add isActive here
      if (data.dataValues.Mixes) {
      for (let i = 0; i < data.dataValues.Mixes.length; i++) {
        if (data.dataValues.Mixes[i].id === 1) {
            data.dataValues.Mixes[i].isActive = true;
        }
      }
    }
      console.log(data);

      res.render("view-profile", {
        artist: data.dataValues,
        blog: data.dataValues.Blogs,
        extras: data.dataValues.Extras,
        mixes: data.dataValues.Mixes
      });
    });
  });

  app.get("/api/artist/:id", function (req, res) {
    db.Artists.findOne({
      where: {
        id: req.params.id,
      }, //how to order by date/newest with a join?
      include: [db.Blogs, db.Extras, db.Mixes],
      order: [["id", "DESC"]],
    }).then((data) => {
      console.log("data from 'inner join' query");
      console.log(data);
      //add isActive here
      if (data.dataValues.Mixes) {
      for (let i = 0; i < data.dataValues.Mixes.length; i++) {
        if (data.dataValues.Mixes[i].id === 1) {
            data.dataValues.Mixes[i].isActive = true;
        }
      }
    }
      console.log(data);

      res.render("profile", {
        artist: data.dataValues,
        blog: data.dataValues.Blogs,
        extras: data.dataValues.Extras,
        mixes: data.dataValues.Mixes
      });
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
    console.log("req.params ", req.params.genre);
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
    console.log(req.params.city);
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

  // Login and Signup Routes
  //=============================================
  app.post(
    "/api/login",
    /* passport.authenticate("local"),*/ (req, res) => {
    
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

  //Blog Post routes
  //==================================================
  app.post("/api/artists/blog", function (req, res) {
    console.log("req.body");
    console.log(req.body);

    db.Blogs.create({
      title: req.body.title,
      body: req.body.body,
      ArtistId: req.body.ArtistId,
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
  })

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

  //Mixes Routes
  //=================================================
  app.post("/api/artists/mixes", function(req, res){
    console.log("req.body for adding mixes = ");
    console.log(req.body);
    let artistId = parseInt(req.body.ArtistId);
    db.Mixes.create({
      url: req.body.url,
      name: req.body.name,
      ArtistId: artistId
    }).then(function(result){
      console.log("query data in MIXES post route .then");

      console.log(result.dataValues.ArtistId);
      res.json(result.dataValues.ArtistId);
    })
  })
};
