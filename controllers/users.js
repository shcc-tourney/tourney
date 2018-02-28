var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({ token: createJWT(user) });
    })
    // User data invalid (prob duplicate email)
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({ email: req.body.email }).exec().then(user => {
    if (!user) return res.status(401).json({ err: 'Invalid Login Credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({ token: createJWT(user) });
      } else {
        return res.status(401).json({ err: 'Invalid Login Credentials' });
      }
    });
  }).catch(err => res.status(401).json(err));
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}