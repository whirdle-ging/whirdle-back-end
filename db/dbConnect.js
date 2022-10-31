const mongoose = require('mongoose')
require('dotenv').config()


const dbConnect = () => {
  return mongoose.connect(process.env.MONGO_DATABASE_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => {
			console.log('Successfully connected to MongoDB Atlas for registration/login!');
		})
		.catch(error => {
			console.log('Unable to connect to MongoDB Atlas for registration/login!');
			console.error(error)
		})
}

module.exports = dbConnect