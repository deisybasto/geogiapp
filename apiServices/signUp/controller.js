const {req,res} = require('express');

const usersGet = (req, resp) => {
    resp.json({
        msg: "ok",
        res: "signup"

    });
};

module.exports = {
    usersGet
};