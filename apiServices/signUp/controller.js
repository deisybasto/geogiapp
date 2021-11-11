const { request, response } = require('express');
const modelUser = require('./model');
const bcryptjs = require('bcryptjs');

const registerUserChild = async (req = request, res = response) => {

    const {
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state

    } = req.body;


    let newUser = new modelUser(
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state)

    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    await newUser.userSave();

    res.json({
        msg: "ok",
        res: "usuario registrado",
        body: newUser
    });
};

module.exports = {
    registerUserChild
};