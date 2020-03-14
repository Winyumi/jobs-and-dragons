const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require("./routes");
const User = require('./models/user');

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
app.use(routes);

/*
app.get('/api/v1/users/:email', (req, res) => {
  const email = req.params.email;

  console.log(email);

  return res.status(200).json({
    success: true,
    data: {
      name: 'Sal Tamay'
    }
  });
});

app.post('/api/v1/users', (req, res) => {
  const user = req.body;
  // const id = req.params.id;
  console.log(user);
  // User.create(user, (err, user) => {
  //   if (err) {
  //     return res.status(400).json({
  //       success: false
  //     });
  //   }
  //   console.log(user);
  //
  // });
  res.status(200).json({
    success: true,
    data: user
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req, res) => {
  // res.sendFile(path.join(__dirname + '/client/public/index.html'));
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});
*/



const PORT = process.env.PORT || 3001;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
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
