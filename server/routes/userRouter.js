const router = require('express').Router();

router.get('/', (req, res) => {
  // Get All Users
});

router.get('/:id', (req, res) => {
  // Get One Users
});

router.post('/', (req, res) => {
  // Create new User
});

router.put('/:id', (req, res) => {
  // Update User
});

router.delete('/:id', (req, res) => {
  // Delete User
});

module.exports = router;
