var express = require('express');
var router = express.Router();
var checkAuth = require('../../config/auth').checkAuth;

router.get('/test', checkAuth, (req, res) => {
  console.log(req.user)
  setTimeout(() => {
    res.json({msg: 'hello from test'});

  }, 3000)
});

module.exports = router;