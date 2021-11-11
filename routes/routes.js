const { Router } = require('express');
const signUP = require('../apiServices/signUp/router');
const  points = require ('../apiServices/points/router')
const router = Router();


//router to sigUP register
router.use('/api',signUP);
router.use('/api',points);


module.exports = router;
