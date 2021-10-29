
const User = require('../../models/users');

module.exports = class UsersSave {
    
    constructor(
        nameChild,
        email,
        password,
        ageChild,
        nameFather,
        state

     )
     {

       this.User = User

       this.userInfo = new this.User({
           nameChild,
           email,
           password,
           ageChild,
           nameChild,
           nameFather,
           state
       })
    
    }

    userSave() {
        
     this.userInfo.save();
       
    }

}