'use strict'
const hlp = require('../helper');

//API routes for the Users table
module.exports = (app, db) => {

  /*Development API to check up on tables; disable in production*/
  app.get('/api/users/getall', (req, res) => {
    //Get all entries on the user's table
    db.Users.findAll().then((users) => {
      console.log(users);
      hlp.respQuery(users, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/users/login', (req, res) => {
    //Find the specified entry on the users table
    let name = req.query.user_name;
    let email = req.query.user_email;
    let passwd = req.query.password;

    db.Users.find({where: {username_name: name}}).then((user) => {
      hlp.respQuery(user, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.post('/api/users/signup', (req, res) => {
    //Shorten the incoming data terms
    let name = req.body.user_name;
    let email = req.body.user_email;
    let passwd = req.body.password;

    //Create an entry on the Users table
    db.Users.create({
      user_name: name,
      user_email: email,
      password: passwd
    });

    //End the POST request
    res.end();
  });
};