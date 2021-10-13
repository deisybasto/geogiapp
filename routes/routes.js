const { Router } = require('express');
const signUP = require('../apiServices/signUp/router');
const router = Router();

//router to sigUP register
router.use('/api',signUP);


module.exports = router;
