const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
