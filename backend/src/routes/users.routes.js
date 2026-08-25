const express = require('express');
const router = express.Router();

// TODO: Implement user routes
// GET /profile
// PUT /profile
// GET /watchlist
// POST /favorites
// DELETE /favorites/:id

router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint - to be implemented' });
});

module.exports = router;
