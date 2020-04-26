const router = require('express').Router();
const User = require('../controllers/users');

// Matches with "/api/v1/users"
router
  .route('/')
  .get(User.findAll)
  .post(User.create);

// Matches with "/api/v1/users/:id"
router
  .route('/id/:id')
  .get(User.findById)
  .put(User.updateById);

// Matches with "/api/v1/users/:email"
router
  .route('/email/:email')
  .get(User.findByEmail)
  .put(User.updateByEmail);
  
// matches with "/api/v1/users/:email"
router
.route('/emailjs/:email')
.put(User.updateByEmailPush);

router
.route('/emaildj/:email')
.put(User.findOneByEmailDel);

module.exports = router;
