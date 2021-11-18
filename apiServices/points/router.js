const { Router } = require('express');
const router = Router();
const { addPointsUser , deletePointsUser ,getPointsUser } = require('./controller')
const { validarCampos } = require('../../middlewares/validarCampos');

router.put ('/addpoint/:id',addPointsUser)
router.delete ('/deletepoint/:id',deletePointsUser)
router.get ('/getpoints/:id',getPointsUser)

module.exports = router;