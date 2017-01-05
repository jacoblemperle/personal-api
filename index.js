var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var skill = require('./controllers/skillzCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/', mainCtrl.index);
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.post('/occupation', mainCtrl.addOccupation);
app.get('/occupation', mainCtrl.getOccupations);
app.get('/occupation/last', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getSpecificHobby);
app.post('/family', mainCtrl.addFamilyMember);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.post('/restaurants', mainCtrl.addRestaurant);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getSpecificRestaurants);
app.put('/name/:id', mainCtrl.changeName);
app.put('/location/:id', mainCtrl.changeLocation);
app.post('/skillz', middleware.generateId, skill.postSkillz);
app.get('/skillz', skill.getSkillz);
app.get('/secrets/:username/:password', middleware.verifyUser, skill.getUser);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
