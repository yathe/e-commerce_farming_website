// routes/farmerSchemeRoutes.js
const mongoose = require("mongoose")
const express = require('express');
const router = express.Router();
const Scheme = require('../db/Scheme');

router.get('/', async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post('/', async (req, res) => {
    const schemeData = req.body;
    try {
      const newScheme = await Scheme.create(schemeData);
      res.status(201).json(newScheme);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
// DELETE /api/schemes/:id
router.delete('/:id', async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    await Scheme.deleteOne({ _id: req.params.id });
    res.json({ message: 'Scheme deleted successfully' });
  } catch (error) {
    console.error('Error deleting scheme:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


