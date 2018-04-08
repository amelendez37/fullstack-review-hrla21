const db = require('../db/index');

const savePlayer = (req, res) => {
  // invoke db save functon
  db.saveOne(req.body, (data) => {
    // pass callback to save that returns status
    res.status(201).send(data);
  });
};

const getAllPlayers = (req, res) => {
  // invoke db query to grab all players
  db.queryAllPlayers((data) => {
    // pass callback to send back data
    res.status(201).send(data);
  });
};

exports.savePlayer = savePlayer;
exports.getAllPlayers = getAllPlayers;