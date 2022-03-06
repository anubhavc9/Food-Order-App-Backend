const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/', async (req, res) => {
  const order = new Order({
    user: req.body.user,
    orderedItems: req.body.orderedItems,
  });
  try {
    const o1 = await order.save();
    res.json(o1);
  } catch (error) {
    res.send('Error: ' + error);
  }
});

module.exports = router;
