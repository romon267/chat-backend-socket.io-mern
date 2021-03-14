const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const channelRouter = require('./controllers/channels');
const config = require('./utils/config');
const logger = require('./utils/logger');

const app = express();

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('Connected to MongoDB!');
  })
  .catch((err) => {
    logger.error(err);
  });

// Loggin each requests details to the console using 'morgan' package
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan('tiny'));
app.use(morgan('POST body: :body', {
  skip: (req) => req.method !== 'POST',
}));

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use('/api/channels', channelRouter);

// If request not finding any route, it will just fall to react app router
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
