const { Router } = require('express');
const router = Router();
const controller = require('./controller')

router.post ('/registro',controller.registerUserChild)

module.exports = router;
