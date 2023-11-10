const router = require('express').Router();
const FavouriteHabit = require('../models/FavouriteHabit.model');

router.post('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const newHabit = await FavouriteHabit.create({
      ...req.body,
      user: userId,
    });
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

router.delete('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    await FavouriteHabit.findByIdAndDelete(habitId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const allUserHabits = await FavouriteHabit.find({
      user: userId,
    });
    res.json(allUserHabits);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
