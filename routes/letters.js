const express = require('express');
const router = express.Router();

const {
	getAllLetters,
	getLetter,
	createLetter,
} = require('../controllers/letter');

router.route('/').get(getAllLetters);
router.route('/letters').post(createLetter);
router.route('/:id').get(getLetter);

module.exports = router;
