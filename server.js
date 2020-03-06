const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Use development logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.status(200).json({
		data: 'Hello from J&D!'
	});
});

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
