const router = require('express').Router();
const controller = require('../controllers/controllers');

router.get('/playerlist', (req, res) => {
  res.status(200).send();
});

router.post('/submit-player', controller.savePlayer);

module.exports = router;