const Word = require('../models/Word')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAllWords = asyncWrapper(async (req, res) => {
	const words = await Word.find({})
	res.status(200).json({ words })
})

const createWord = asyncWrapper(async (req, res) => {
	const word = await Word.create(req.body)
	res.status(201).json({ word })
	console.log('word created')
})

const getWord = asyncWrapper(async (req, res, next) => {
	const { id: wordID } = req.params;
	const word = await Word.findOne({ _id: wordID });
	if (!word) {
		return next(createCustomError(`No word with id : ${wordID}`, 404));
	}
	res.status(200).json({ word })
})

module.exports = {
	getAllWords,
	createWord,
	getWord,
}
