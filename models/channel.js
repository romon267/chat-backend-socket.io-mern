/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  users: [
    {
      id: {
        type: String,
        requried: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
  ],
  messages: [
    {
      author: {
        id: {
          type: String,
          required: String,
        },
        username: {
          type: String,
          required: true,
        },
      },
      content: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      date: String,
    },
  ],
}, { timestamps: true });

// When converting to json(when sending data to front-end)
// We remove _id(special ObjectId type) and set id(String)
// and __v property as not needed
channelSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Channel', channelSchema);
