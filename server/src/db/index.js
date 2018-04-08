const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basketball');

const playerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  number: String,
  position: String,
  height: String,
  weight: String,
  age: String,
  image: String,
  college: String,
  team: String
});

const Player = mongoose.model('Player', playerSchema);

const saveOne = (player, callback) => {
  // if player is already in db
  Player.find({firstName: player.firstname, lastname: player.lastname}, (err, data) => {
    // notify with response
    if (err) { console.log(err); }
    if (!!data.length) {
      callback('Player is already in the database');
    } else {
      // else make new player and save to db
      const newPlayer = new Player(player);
      newPlayer.save((err, savedPlayer) => {
        if (err) { console.log(err); }
        callback('Successfully saved a new player');
      });
    }
  });
};

exports.saveOne = saveOne;