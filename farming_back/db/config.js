// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://rajaram:rajaram@cluster0.nrco6rp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }
// )
//   .then(() => console.log('MongoDB Connected to database...'))
//   .catch(err => console.log(err));
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rajaram:rajaram@cluster0.nrco6rp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected to database...'))
  .catch(err => console.error('MongoDB connection error:', err));
