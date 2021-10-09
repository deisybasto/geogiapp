const express = require('express');
const router = express.Router();
const signUP = require('../apiServices/signUp/router');

router.use('/api',signUP);

module.exports = router;
