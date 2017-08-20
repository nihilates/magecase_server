'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all characters owned by a user
  app.get('/api/chars', (req, res) => {
    let userId = req.query.userId;

    db.Characters.findAll({where: {userId: userId}}).then(chars => {
      hlp.respQuery(chars, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};