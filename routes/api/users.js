const router = require('express').Router();
const usersController = require('../../controllers/users');

// Matches with "/api/v1/users"
router
  .route('/')
  .get(usersController.findAll)
  .post(usersController.create);

/*
// Matches with "/api/v1/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update);
*/

// Matches with "/api/v1/users/:email"
router
  .route('/:email')
  .get(usersController.findByEmail)
  .put(usersController.update);

module.exports = router;
