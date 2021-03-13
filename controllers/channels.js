const router = require('express').Router();
const Channel = require('../models/channel');
// const logger = require('../utils/logger');
require('express-async-errors');

// Getting the list of all chat channels
router.get('/', async (req, res) => {
  const channels = await Channel.find().sort('-createdAt');
  return res.json(channels);
});

// Getting single channel by id
router.get('/:id', async (req, res) => {
  const channel = await Channel.findById(req.params.id);
  return res.json(channel);
});

// Creating a new channel
router.post('/', async (req, res) => {
  const { name, creator } = req.body;
  const channel = new Channel({
    name,
    creator,
    users: [],
  });
  await channel.save();
  return res.status(201).json(channel);
});

// Updating channel
// Using for adding and removing users etc.
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const channelToChange = await Channel.findById(id);
  if (!channelToChange) {
    return res.status(400).json({ error: 'Channel not found' });
  }
  const { users } = req.body;
  const updatedChannel = { ...channelToChange, users };
  const savedChannel = await Channel.findByIdAndUpdate(id, updatedChannel, {
    new: true,
    runValidators: true,
  });
  return res.status(201).json(savedChannel);
});

module.exports = router;
