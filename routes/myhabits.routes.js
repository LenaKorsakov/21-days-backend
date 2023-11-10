const router = require('express').Router();
const MyHabit = require('../models/MyHabit.model');

router.post('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const newHabit = await MyHabit.create({
      ...req.body,
      user: userId,
      start_day: new Date().toJSON(),
    });
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

router.put('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const userId = req.userId;
    const habitToUpdate = await MyHabit.findByIdAndUpdate(
      habitId,
      {
        ...req.body,
        user: userId,
      },
      {
        new: true,
      }
    );
    res.status(204).json(habitToUpdate);
  } catch (error) {
    next(error);
  }
});

router.delete('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    await MyHabit.findByIdAndDelete(habitId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  const userId = req.userId;
  try {
    const allUserHabits = await MyHabit.find({
      user: userId,
    });
    res.json(allUserHabits);
  } catch (error) {
    next(error);
  }
});

router.get('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const habit = await MyHabit.findById(habitId);
    res.json(habit);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
