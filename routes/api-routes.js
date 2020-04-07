// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================


module.exports = function(app) {

 
    /******CUSTINFO ROUTS */
     // find one record by userId
  app.get("/api/custinfo/:userId", function(req, res) {
    db.Login.findOne({
      where: {
        userId: req.user.userId
      }
    })
    .then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  ///
  app.get("/bananas", function(req, res) {
    console.log("get body", req.body)
    db.User.findOne({
      where: {
        id: req.user.id
      }
    })
    .then(function(userData) {
      console.log("user Data",userData);
      res.json(userData);
    });
  });

    // find one record by id
  app.get("/api/custinfo/:userId", function(req, res) {
    db.custInfo.findOne({
      where: {
        userid: req.user.userId
      }
    })
    .then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });
    // create custinfo record
    app.post("/api/custinfo", function(req, res) {
      console.log(req.body);
      db.CustInfo.create({
        userId: req.body.userId,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        customer_pic: req.body.customer_pic
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });
    //update profile image
    app.post("/api/image", function(req, res) {
      console.log("image body", req.body)
      db.User.update(
        {customer_pic: req.body.url},
        {
        where: {
          id: req.user.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
    // update a record
    app.put("/api/custinfo/:userId", function(req, res) {
      db.custInfo.update(req.user,
        {
          where: {
            // req.user.id
            userId: req.user.userId
          }
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });
    app.delete("/api/custinfo/:userId", function(req, res) {
      db.CustInfo.destroy({
        where: {
          userId: req.user.userId
        }
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });


/************Iteminfo */
     // find one record by userId
    // app.get("/api/iteminfo/:userId", function(req, res) {
    //   db.ItemInfo.findOne({
    //     where: {
    //       userId: req.user.userId
    //     }
    //   })
    //   .then(function(dbPost) {
    //     console.log(dbPost);
    //     res.json(dbPost);
    //   });
    // });
      // find one record by id
    app.get("/api/iteminfo/:userId", function(req, res) {
      db.ItemInfo.findOne({
        where: {
          userid: req.user.userId
        }
      })
      .then(function(dbPost) {
        console.log(dbPost);
        res.json(dbPost);
      });
    });
      // // create custinfo record
      // app.post("/api/iteminfo", function(req, res) {
      //   console.log(req.body);
      //   db.ItemInfo.create({
      //     userId: req.body.userId,
      //     storeName: req.body.storeName,
      //     itemLable: req.body.itemLable,
      //     itemLableTwo: req.body.itemLableTwo,
      //     price: req.body.price,
      //     item_pic: req.body.item_pic
      //   })
      //     .then(function(dbPost) {
      //       res.json(dbPost);
      //     });
      // });
      // update a record
      app.put("/api/password/:userId", function(req, res) {
        db.Password.update(req.user,
          {
            where: {
              // req.user.id
              userId: req.user.userId
            }
          })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
      app.delete("/api/password/:userId", function(req, res) {
        db.Password.destroy({
          where: {
            userId: req.user.userId
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    // }; before users aip merge 
    /**************user table  route*********************88 */

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {    
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      login: req.body.login,
      password: req.body.password,
      fullName: req.body.fullName,
      address: req.body.address,
      phone: req.body.phone      
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
