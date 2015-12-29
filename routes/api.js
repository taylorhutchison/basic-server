var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect(301, '/');
});

router.get('/states', function(request, response){
   response.json([
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Colorado",
          "Connecticut",
          "Delaware",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Maryland",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Jersey",
          "New Mexico",
          "New York",
          "North Carolina",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Pennsylvania",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Virginia",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming"
      ]);
});

router.get('/people', function(request, response){
   response.json([
       {
           name: 'Adam',
           age: 20,
           gender: 'Male'
       },
       {
           name: 'Brad',
           age: 63,
           gender: 'Male'
       },
       {
           name: 'Chris',
           age: 34,
           gender: 'Male'
       },
       {
           name: 'Daphne',
           age: 19,
           gender: 'Female'
       },
       {
           name: 'Elli',
           age: 25,
           gender: 'Female'
       },
       {
           name: 'Finn',
           age: 15,
           gender: 'Male'
       },
       {
           name: 'Garrett',
           age: 36,
           gender: 'Male'
       }

   ]);
});

router.get('/error', function(request, response){;
    response.status(400);
    response.send();
});

router.get('/http*', function(request, response){
    if(/^\/\d{3}$/.test(request.params[0])){
        response.status(parseInt(request.params[0].match(/\d{3}/)[0]));
    }
    response.send(request.params[0]);
});

module.exports = router;
