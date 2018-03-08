var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
  addUserFromToken,
  checkAuth
};

function addUserFromToken(req, res, next) {
  var token = req.get('Authorization') || req.body.token || req.query.token;
  if (token) {
    // remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // check if token is valid and not expired
    jwt.verify(token, SECRET, function (err, decoded) {
      if (!err) {
        // valid token, so add user to req
        req.user = decoded.user;
        next();
      }
    });
  } else {
    next();
  }
}

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({error: 'Invalid or missing auth token'});
}
