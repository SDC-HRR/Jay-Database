const pgp = require('pg-promise')(/* options */);

const db = pgp('postgres://postgres:postgres@localhost:5432/steamy');

const getOne = (id, callback) => {
  db.one('SELECT game FROM games WHERE proxyid=$1', id)
    .then((data) => callback(null, [data.game[0]]))
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = { db, getOne };
