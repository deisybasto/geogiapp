const { getPlugginUrl }  =require('./controller');
const { Router } = require('express');
const router = Router();


router.get ('/getUrlPluggin/:id',getPlugginUrl)

module.exports = router