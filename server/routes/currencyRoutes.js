'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all default currency systems and custom currency systems that were created by the user
  app.get('/api/currencysys', (req, res) => {
    let userId = req.query.userId;

    db.CurrencySystems.findAll({where: {$or: [{is_custom: false}, {userId: userId}]}})
    .then(system => {
      hlp.respQuery(system, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/currency/getall', (req, res) => {
    db.CurrencySystems.findAll({include: db.CurrencyUnits})
    .then(system => {
      hlp.respQuery(system, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  //gets all units that belong to a currency system and returns them, also including the system's data
  app.get('/api/currencyunits', (req, res) => {
    let currencyId = req.query.currencyId;

    db.CurrencyUnits.findAll({where: {currencyId: currencyId}, include: db.CurrencySystems}).then(unit => {
      hlp.respQuery(unit, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};