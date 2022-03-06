const express = require('express');
const router = express.Router();
const Meal = require('../models/meal');

router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.send('Error: ' + error);
  }
});

module.exports = router;
