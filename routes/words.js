const express = require('express')
const router = express.Router()

const {
    getAllWords,
    getWord,
    createWord,
    } = require('../controllers/word')

router.route('/').get(getAllWords);
router.route('/words').post(createWord);
router.route('/:id').get(getWord);

module.exports = router