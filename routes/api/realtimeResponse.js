var express = require('express');
var router = express.Router();

router.get('/test', (req, res) => {
  console.log(req.user)
  setTimeout(() => {
    res.json({msg: 'hello from test'});

  }, 3000)
});

module.exports = router;