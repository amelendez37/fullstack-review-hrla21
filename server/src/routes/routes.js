const router = require('express').Router();
const controller = require('../controllers/controllers');

router.get('/playerlist', controller.getAllPlayers);

router.post('/submit-player', controller.savePlayer);

module.exports = router;