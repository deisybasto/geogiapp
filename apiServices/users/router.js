const { Router } = require('express');
const router = Router();
const { usuariosGet,usuariosDelete,usuariosPut } = require('./controller')

router.get('/usuariosGet/:id',usuariosGet)
router.delete ('/deleteuser/:id',usuariosDelete)
router.put ('/updateUser/:id',usuariosPut)

module.exports = router;