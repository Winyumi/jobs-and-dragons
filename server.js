const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Use development logging middleware
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Add routes, both API and view
app.use('api/v1', routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req, res) => {
  // res.sendFile(path.join(__dirname + '/client/public/index.html'));
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
