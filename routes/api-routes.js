// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const bcrypt = require("bcryptjs");
// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/createUser", (req, res) => {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("some password", salt);    
    console.log(hash);

   db.login.create({loginName:"James", firstName:"James", lastName:"Helms", MI:"O"})
   .then(function(data){
     db.password.create({salt:salt, password:hash, userId:data.dataValues.id});
   }) 
  //  , password: hash, salt: salt});

    res.end();
})

  /******LOGIN ROUTS */
  // find one record by loginName
  app.get("/api/login/:loginName", function(req, res) {
    db.Login.findOne({
      where: {
        loginName: `ohboy`
      }
    });
    return(req.params);
  });
    // find one record by id
  app.get("/api/login/:id", function(req, res) {
    db.Login.findOne({
      where: {
        id: `1`
      }
    })
    // return(req.params);
    .then(function(data){
      console.log(data);
      res.json(data);
    })
  });
    // create login record
    app.post("/api/login", function(req, res) {
      console.log(req.body);
      const hashedPassword = password.hash(req.body.password)
    
      db.Login.create({
        loginName: req.body.loginName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        MI: req.body.MI,
        suffix: req.body.suffix,
        password: hashedPassword
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });
    // update a record
    app.put("/api/login", function(req, res) {
      db.Login.update(req.user,
        {
          where: {
            // req.user.id
            id: req.user.id
          }
        })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });
    app.delete("/api/login/:loginName", function(req, res) {
      db.Login.findOne({
        where: {
          id: req.user.loginName
        }
      });
      // let userid: Login.id;
      db.login.destroy({
        where: {
          loginName: req.user.loginName
        }
      })
        .then(function(dbPost) {
          res.json(dbPost);
        });
    });
    /******CUSTINFO ROUTS */
     // find one record by userId
  app.get("/api/custinfo/:userId", function(req, res) {
    db.Login.findOne({
      where: {
        userId: req.user.userId
      }
    });
    return(req.params);
  });
    // find one record by id
  app.get("/api/custinfo/:userId", function(req, res) {
    db.custInfo.findOne({
      where: {
        userid: req.user.userId
      }
    });
    return(req.params);
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

/************Password */
     // find one record by userId
     app.get("/api/password/:userId", function(req, res) {
      db.Password.findOne({
        where: {
          userId: req.user.userId
        }
      });
      return(req.params);
    });
      // find one record by id
    app.get("/api/password/:userId", function(req, res) {
      db.Password.findOne({
        where: {
          userid: req.user.userId
        }
      });
      return(req.params);
    });
      // create custinfo record
      app.post("/api/password", function(req, res) {
        console.log(req.body);
        db.Password.create({
          userId: req.body.userId,
          password: req.body.address,
          hash: req.body.city,
          salt: req.body.state
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
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
  

/************Iteminfo */
     // find one record by userId
    app.get("/api/iteminfo/:userId", function(req, res) {
      db.ItemInfo.findOne({
        where: {
          userId: req.user.userId
        }
      });
      return(req.params);
    });
      // find one record by id
    app.get("/api/iteminfo/:userId", function(req, res) {
      db.ItemInfo.findOne({
        where: {
          userid: req.user.userId
        }
      });
      return(req.params);
    });
      // create custinfo record
      app.post("/api/iteminfo", function(req, res) {
        console.log(req.body);
        db.ItemInfo.create({
          userId: req.body.userId,
          storeName: req.body.storeName,
          itemLable: req.body.itemLable,
          itemLableTwo: req.body.itemLableTwo,
          price: req.body.price,
          item_pic: req.body.item_pic
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
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
    };