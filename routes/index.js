const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({ response: 'I am alive' });
});

module.exports = router;
