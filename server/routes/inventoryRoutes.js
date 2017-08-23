'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  app.get('/api/inventory/all', (req, res) => {
    let charId = req.query.charId;

    db.Inventory.findAll({
      where: {charId: charId},
      include: {model: db.Items}
    }).then(entries => {
      hlp.respQuery(entries, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.put('/api/inventory/:charId', (req, res, next) => {
    let charId = req.params.charId;

    if (!character) {
      res.status(500).send('No such character exists')
    } else {
      res.send('Success!');
    }
  }).catch(err => {
    helpers.respErr(err, req, res);
  })
};