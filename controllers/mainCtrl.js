var users = require('../models/user.js');

module.exports = {
  index: function(req, res, next){
    res.status(200).json(users);
  },
  getName: function(req, res, next){
    res.status(200).json(users.name);
  },
  getLocation: function(req, res, next){
    res.status(200).json(users.location);
  },
  getOccupations: function(req, res, next){
    console.log(req.query.order);
      if(req.query.order == 'desc'){
        var descOccupation = users.occupations.sort();
        res.status(200).json(descOccupation);
      } else if(req.query.order == 'asc'){
        var ascOccupation = users.occupations.sort().reverse();
        res.status(200).json(ascOccupation);
      }
    res.status(200).json(users.occupations);
  },
  getLatestOccupation: function(req, res, next){
    res.status(200).json(users.occupations[users.occupations.length - 1]);
  },
  getHobbies: function(req, res, next){
    res.status(200).json(users.hobbies);
  },
  getSpecificHobby: function(req, res, next){
    var typeName = function(element, index, array){
      return element.type === req.params.type;
    };
    var filtered = users.hobbies.filter(typeName);
    res.status(200).json(filtered);

  },
  getFamily: function(req, res, next){
    if (req.query.relation) {
      var filteredFamily = users.family.filter(function (user) {
        return user.relation === req.query.relation;
      });
      res.status(200).json(filteredFamily);
    } else {
      res.status(200).json(users.family);
    }
  },
  getFamilyGender: function(req, res, next){
    var typeName = function(element, index, array){
      return element.gender === req.params.gender;
    };
    var filtered = users.family.filter(typeName);
    res.status(200).json(filtered);

  },
  getRestaurants: function(req, res, next){
    res.status(200).json(users.restaurants);
  },
  getSpecificRestaurants: function(req, res, next){
    var filterRestaurant = users.restaurants.filter(function(element, index, array){
      return element.name == req.params.name;
    });
    res.status(200).json(filterRestaurant);
  },
  addOccupation: function(req, res, next){
    users.occupations.push(req.body);
    res.status(200).json(users.occupations);
  },
  addFamilyMember: function(req, res, next){
    users.family.push(req.body);
    res.status(200).json(users.family);
  },
  addRestaurant: function(req, res, next){
    users.restaurants.push(req.body);
    res.status(200).json(users.restaurants);
  },
  changeName: function(req, res, next){
    users.name = req.params.id;
    res.status(200).json(users.name);
  },
  changeLocation: function(req, res, next){
    users.location = req.params.id;
    res.status(200).json(users.location);
  },


};
