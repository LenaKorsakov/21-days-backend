const router = require('express').Router();
const MyHabit = require('../models/MyHabit.model');

router.post('/', async (req, res, next) => {
  try {
    const newHabit = await MyHabit.create({
      ...req.body,
    });
    res.status(201).json(newHabit);
  } catch (error) {
    next(error);
  }
});

router.put('/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const habitToUpdate = await MyHabit.findByIdAndUpdate(habitId, req.body, {
      new: true,
    });
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
  // TODO user ID????????
  console.log(req);
  try {
    const allUserHabits = await MyHabit.find({
      user: '654a4d45aff868a386e36592',
    }).populate('checkins');
    res.json(allUserHabits);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
