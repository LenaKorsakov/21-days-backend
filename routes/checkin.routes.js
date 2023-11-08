const router = require('express').Router();
const Checkin = require('../models/Checkin.model');

router.post('/', async (req, res, next) => {
  // TODO how to find user id?????

  try {
    const newCheckin = await Checkin.create({
      ...req.body,
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

router.get('/', async (req, res, next) => {
  // TODO habit ID????????
  try {
    const allCheckins = await Checkin.find({
      habit: '654a4d45aff868a386e36592',
    });
    res.json(allCheckins);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
