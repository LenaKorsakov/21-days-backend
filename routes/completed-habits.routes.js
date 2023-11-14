const router = require('express').Router();
const CompletedHabit = require('../models/CompletedHabit.model');

router.post('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const newHabit = await CompletedHabit.create({
      ...req.body,
      user: userId,
    });
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const allUserHabits = await CompletedHabit.find({
      user: userId,
    });
    res.json(allUserHabits);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
