const { Router } = require('express');
const router = Router;


router.get('/v1', (req,res) =>{
    res.json({
        msg :'ok'
    })

});

module.exports = router