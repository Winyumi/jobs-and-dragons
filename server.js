const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

const app = express();
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Use development logging middleware
if (process.env.NODE_ENV === 'development') {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

const uri = process.env.MLAB_URI;
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});
