const express = require('express');
const router = express.Router();

router.get  ('/registro', (req, resp) => {
    res.json({
        msg: "ok",
        res: "api"

    });
});

module.exports = router;
