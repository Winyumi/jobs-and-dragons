const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json({
    data: 'Hello from J&D!'
  });
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
