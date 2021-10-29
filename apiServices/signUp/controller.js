const { request, response } = require('express');
const  modelUser  = require('./model');
//const bcryptjs = require('bcryptjs');

const registerUserChild = async (req = request, res = response) => {

    const {
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state 

    } = req.body;
    
    let newUser = new modelUser (  
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state  )
    await newUser.userSave();
 
    res.json({
        msg: "ok",
        res: "usuario registrado"
    });
};

module.exports = {
    registerUserChild
};