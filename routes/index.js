const path = require('path');
const router = require('express').Router();
const routes = require('./users');

// API Routes
router.use('/api/v1/users', routes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  } else {
    console.log('hit');
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  }
});

module.exports = router;
