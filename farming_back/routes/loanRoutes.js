const express = require('express');
const router = express.Router();
const Loan = require('../db/Loan');

// Get all loans
router.get('/', async (req, res) => {
    try {
        const loans = await Loan.find();
        res.json(loans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new loan
router.post('/', async (req, res) => {
    const loan = new Loan({
        amount: req.body.amount,
        interestRate: req.body.interestRate,
        duration: req.body.duration,
        name: req.body.name,
    });

    try {
        const newLoan = await loan.save();
        res.status(201).json(newLoan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
