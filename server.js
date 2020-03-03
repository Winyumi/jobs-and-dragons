const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

// Use development logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/', (req, res) => {
  // res.status(200).json({
  //   data: 'Hello from J&D!'
  // });
    res.sendFile(path.join(__dirname, "client/public", "index.html"));

});

// app.use((_, res) => {
//   res.sendFile(join(__dirname, "public", "index.html"));
// });


app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
