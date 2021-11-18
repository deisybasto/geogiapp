const { response } = require('express');
const User = require('../../models/users');


const getPlugginUrl = async(req, res = response) => {

    const { id } = req.params;

    const userId = await User.findById(id);
    return res.json({
        
        url:'http://127.0.0.1:5500/pluggins/index.html'
        
    })


}

module.exports = {
    getPlugginUrl
}