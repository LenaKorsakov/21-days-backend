const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/globalhabits', require('./global-habits.routes'));
router.use('/myhabits', require('./myhabits.routes'));

module.exports = router;
