const express = require('express');
const app = express();
const words = require('./routes/words');
const letters = require('./routes/letters');
const dbConnect = require('./db/dbConnect');
require('dotenv').config();
const bodyParser = require('body-parser');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
	res.json(words);
});

app.post('/words', (req, res) => {
	res.json(words);
});

app.get('/', (req, res) => {
	res.send(letters);
	res.json(letters);
});

app.post('/letters', (req, res) => {
	res.send('hello');
	res.json(letters);
});

app.use('/letters', letters);
app.use('/words', words);

app.use(notFound);
app.use(errorHandlerMiddleware);
const portDB = process.env.PORT || 8000;

const start = async () => {
	try {
		await dbConnect(process.env.MONGO_DATABASE_URL);
		app.listen(portDB, () =>
			console.log(`Server is listening on port ${portDB}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
