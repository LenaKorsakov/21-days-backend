const router = require('express').Router();
const Checkin = require('../models/Checkin.model');

router.post('/', async (req, res, next) => {
  const userId = req.userId;

  try {
    const newCheckin = await Checkin.create({
      ...req.body,
      user: userId,
    });
    res.status(201).json(newCheckin);
  } catch (error) {
    next(error);
  }
});

router.delete('/:checkinId', async (req, res, next) => {
  try {
    const { checkinId } = req.params;
    await Checkin.findByIdAndDelete(checkinId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.get('/:habitId', async (req, res, next) => {
  const { habitId } = req.params;
  try {
    const allCheckins = await Checkin.find({
      habit: habitId,
    });
    res.json(allCheckins);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete-all/:habitId', async (req, res, next) => {
  try {
    const { habitId } = req.params;
    const deletedCheckins = await Checkin.deleteMany({ habit: habitId });
    console.log(deletedCheckins);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
