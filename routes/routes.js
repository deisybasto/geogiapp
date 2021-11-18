const { Router } = require('express');
const signUP = require('../apiServices/signUp/router');
const  points = require ('../apiServices/points/router');
const  login = require ('../apiServices/login/router');
const  plugginURL = require ('../apiServices/ExecuteClassificShapes/router');
const users = require ('../apiServices/users/router')
const router = Router();


//router to sigUP register
router.use('/api',signUP);
router.use('/api',points);
router.use('/api',login);
router.use('/api',plugginURL);
router.use('/api',users)


module.exports = router;
