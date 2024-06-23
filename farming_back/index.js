const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const schemeRouter = require('./routes/schemes');
const loanRoutes = require('./routes/loanRoutes');
require('./db/config')
const User = require("./db/User")
const productRoutes = require('./routes/productRoutes');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.post("/register", async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
app.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ error: 'Email and password are required' });
    }
    const user = await User.findOne({ email: req.body.email }).select("-password");
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// /-----------------------------------
// Routes


// Start server

app.use('/api/schemes', schemeRouter);
app.use(express.static("uploads"));
app.use('/api/products', productRoutes);
app.use('/api/loans', loanRoutes);
app.listen(5000, async () => {
  console.log('Server is running on port 5000');
  // await seedData();
});
