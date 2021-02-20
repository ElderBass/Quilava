// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var path = require("path");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var path = require("path");
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

// Sets up the Express App
// =============================================================
var app = express();
 var PORT = process.env.PORT || 8080;
//
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Handlebars as the designated frontend technology
app.engine("handlebars", exphbs({ defaultLayout: "main" }, {helpers: {
  formatDate: function (date, format) {
      return moment(date).format(format);
  }
}}));
app.set("view engine", "handlebars");


// Passport Middleware
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Allows use to use all the files/folders from 'public' as our static directory
app.use(express.static(path.join(__dirname, '/public')));

// Routes
// =============================================================
require('./routes/routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
