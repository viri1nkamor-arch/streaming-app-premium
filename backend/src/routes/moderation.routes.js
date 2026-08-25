const express = require('express');
const router = express.Router();

// TODO: Implement moderation routes
// POST /report
// GET /reports
// PUT /reports/:id/status
// POST /ban-user
// GET /banned-users
// POST /content-review

router.post('/report', (req, res) => {
  res.json({ message: 'Report endpoint - to be implemented' });
});

router.get('/reports', (req, res) => {
  res.json({ message: 'Get reports endpoint - to be implemented' });
});

module.exports = router;
