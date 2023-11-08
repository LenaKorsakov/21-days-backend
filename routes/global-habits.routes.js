const router = require('express').Router();
const GlobalHabit = require('../models/GlobalHabit.model');

router.get('/', async (req, res) => {
  GlobalHabit.find(req.query)
    .then((habits) => {
      res.json(habits);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
