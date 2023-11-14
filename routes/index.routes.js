const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.use('/globalhabits', require('./global-habits.routes'));

router.use(isAuthenticated);
router.use('/myhabits', require('./myhabits.routes'));
router.use('/checkins', require('./checkin.routes'));
router.use('/favorite-habits', require('./favorite-habits.routes'));
router.use('/completed-habits', require('./completed-habits.routes'));

module.exports = router;
