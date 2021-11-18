const { request, response } = require('express');
const User = require('../../models/users');

const addPointsUser = async(req, res = response) => {

    const { id } = req.params;
    let { points,newPoints } = req.body;
    newPoints8 = points + newPoints

    const user = await User.findByIdAndUpdate( id,{points:newPoints8});

    res.json(newPoints8);
}

const deletePointsUser = async(req, res = response) => {

    const { id } = req.params;
    let { points,newPoints } = req.body;
    newPoints8 = points - newPoints
    
    const user = await User.findByIdAndUpdate( id , { points : newPoints8});
   
    res.json(user.points);
    console.log(req.body)

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