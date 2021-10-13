const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.get  ('/registro',controller.usersGet)

module.exports = router;
