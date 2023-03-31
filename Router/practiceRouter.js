const router = require('express').Router();
const {postData} = require('../Controller/practiceController')

router.post('/',  postData)

module.exports = router ;