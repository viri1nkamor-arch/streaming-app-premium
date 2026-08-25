const express = require('express');
const router = express.Router();

// TODO: Implement content routes
// GET /movies
// GET /series
// GET /channels (live TV)
// GET /:id
// GET /search
// POST /trending
// GET /epg (Electronic Program Guide)

router.get('/movies', (req, res) => {
  res.json({ message: 'Movies endpoint - to be implemented' });
});

router.get('/series', (req, res) => {
  res.json({ message: 'Series endpoint - to be implemented' });
});

module.exports = router;
