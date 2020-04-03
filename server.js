// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
var session = require("express-session");
const path = require("path");
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/public"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/testroutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD
db.sequelize.sync({}).then(function() {
=======
db.sequelize.sync().then(function() {
>>>>>>> master
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
