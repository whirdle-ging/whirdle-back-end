const Letter = require('../models/Letter');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllLetters = asyncWrapper(async (req, res) => {
	const letters = await Letter.find({});
	res.status(200).json({ letters });
});

const createLetter = asyncWrapper(async (req, res) => {
	const letter = await letter.create(req.body);
	res.status(201).json({ letter });
	console.log('letter created');
});

const getLetter = asyncWrapper(async (req, res, next) => {
	const { id: letterID } = req.params;
	const letter = await letter.findOne({ _id: letterID });
	if (!letter) {
		return next(createCustomError(`No letter with id : ${letterID}`, 404));
	}
	res.status(200).json({ letter });
});

module.exports = {
	getAllLetters,
	createLetter,
	getLetter,
};
