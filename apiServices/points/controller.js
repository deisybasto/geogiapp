const { request, response } = require('express');
const User = require('../../models/users');

const addPointsUser = async(req, res = response) => {

    const { id } = req.params;
    let { points } = req.body;

    const user = await User.findByIdAndUpdate( id,points);

    res.json(user);
}

const deletePointsUser = async(req, res = response) => {

    const { id } = req.params;
    let { points,newPoints } = req.body;
    newPoints = points - newPoints
    
    const user = await User.findByIdAndUpdate( id,{ points:newPoints });
    res.json(user);

}

const getPointsUser = async(req, res = response) => {

    const { id } = req.params;

    const userPoints = await User.findById(id);
    return res.json({
        id:userPoints.id,
        points:userPoints.points
        
    })


}


module.exports = {

    addPointsUser,
    deletePointsUser,
    getPointsUser

}