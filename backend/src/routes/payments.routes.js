const express = require('express');
const router = express.Router();

// TODO: Implement payment routes
// POST /create-subscription
// POST /cancel-subscription
// GET /subscription-status
// POST /payment-method
// GET /invoices
// POST /webhook/stripe

router.post('/create-subscription', (req, res) => {
  res.json({ message: 'Create subscription endpoint - to be implemented' });
});

router.post('/webhook/stripe', (req, res) => {
  res.json({ message: 'Stripe webhook endpoint - to be implemented' });
});

module.exports = router;
