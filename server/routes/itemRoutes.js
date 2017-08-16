'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets a list of all items on the items table; this will change to be more specific when we go live
  app.get('/api/auth/items', (req, res) => {
    db.Items.findAll().then(items => {
      hlp.respQuery(items, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  //gets a specific item type
  app.get('/api/items/type', (req, res) => {
    let typeId = req.query.typeId;

    db.Items.find({where: {id: typeId}}).then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};