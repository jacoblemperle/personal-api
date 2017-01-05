var user = require('../models/user.js');
var skills = require('../models/skillz.js');
var secret = require('../models/secrets.js');

module.exports = {
  addHeaders: function(req, res, next){
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });
    next();
  },
  generateId: function(req, res, next){
      req.body.id = skills.length + 1;
      next();
  },
  verifyUser: function(req, res, next){
    var usernameTrue = false;
    var passTrue = false;
  if(req.params.username === secret.username){
    usernameTrue = true;
  }
  if(req.params.password === secret.password){
    passTrue = true;
  }
  if(usernameTrue && passTrue === true){
    next();
  }
    res.status(200).json("woron");
  }

};
