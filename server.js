require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log('Server listening on port 4000.');
    });
  })
  .catch((error) => {
    console.log(error);
  });
