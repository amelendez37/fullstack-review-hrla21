const router = require('express').Router();

router.get('/playerlist', (req, res) => {
  res.status(200).send();
});

router.get('/submitplayer', (req, res) => {
  res.status(200).send();
});

module.exports = router;