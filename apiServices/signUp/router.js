const { Router } = require('express');
const router = Router();
const controller = require('./controller');
const { validarCampos } = require('../../middlewares/validarCampos');

router.post ('/registro',controller.registerUserChild)

module.exports = router;
