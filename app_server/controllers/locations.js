/* GET 'home' page */

const login = function(req, res){
res.render('login', { title: 'Login' });
};
/* GET 'Registration' page */
const registration = function(req, res){
res.render('registration', { title: 'Registration' });
};
/* GET 'Add review' page */
const addReview = function(req, res){
res.render('location-review-form', { title: 'Add review' });
};
/* GET 'Airlines list' page */
const airlinesList = function(req, res){
res.render('airline-list', { title: 'Airlines' ,  
airlines: [{
  name: 'Aer Lingus',
  rating: 3,
  operatingSince: '1950',
  reviews: [{author: 'John Doe',
   rating: 3, 
   reviewText: 'Got me from point A to Z',
   date: '1 Jan 2020'}] 
},{
  name: 'Air Baltic',
  rating: 3,
  operatingSince: '1950',
  reviews: [{author: 'John Doe',
   rating: 3, 
   reviewText: 'Got me from point A to Z',
   date: '1 Jan 2020'}] 
}]})
};

module.exports = {
login,
registration,
airlinesList,
addReview
};

