const router = require('express').Router();
const MyHabit = require('../models/MyHabit.model');

router.post('/', async (req, res, next) => {
  const userId = req.payload._id;
  try {
    const newHabit = await MyHabit.create({
      ...req.body,
      user: userId,
    });
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

router.put('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const userId = req.payload._id;
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
  const userId = req.payload._id;
  try {
    const allUserHabits = await MyHabit.find({
      user: userId,
    });
    res.json(allUserHabits);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
