const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const User = require('../../models/users');


const usuariosGet = async(req = request, res = response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.json(user)
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    const usuario = await User.findByIdAndUpdate( id, { state: false } );

    
    res.json(usuario);
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, email, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await User.findByIdAndUpdate( id, resto );

    res.json(usuario);
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
}