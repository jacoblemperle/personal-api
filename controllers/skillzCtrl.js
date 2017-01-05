var skillz = require('../models/skillz.js');
var secret = require('../models/secrets.js');

module.exports = {
  postSkillz: function(req, res, next){
    skillz.push(req.body);
    res.status(200).json(skillz);
  },
  getSkillz: function(req, res, next){
    res.status(200).json(skillz);
  },
  getUser: function(req, res, next){
    res.status(200).json({user: secret.username, pass: secret.password});
  }
};
