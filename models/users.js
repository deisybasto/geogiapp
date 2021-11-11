const { Schema, model } = require('mongoose');

const UserScheme = Schema({
    nameChild: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    ageChild: {
        type: Number,
    },
    nameFather: {
        type: String,
        required: true,
       
    },
    state: {
        type: Boolean,
        default: true
    },
    points: {
        type: Number,
        default:0
    }
});


UserScheme.methods.toJSON = function() {
    const { __v, password, ...usuario  } = this.toObject();
    return usuario;
}

module.exports = model( 'User', UserScheme );