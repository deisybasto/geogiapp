
const User = require('../../models/users');

module.exports = class UsersSave {
    
    constructor(
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state,
        points

     )
     {

       this.User = User

       this.userInfo = new this.User({
           nameChild,
           email,
           password,
           ageChild,
           nameFather,
           state,
           points

       })
    
    }

    userSave() {
        
     this.userInfo.save();
       
    }

}