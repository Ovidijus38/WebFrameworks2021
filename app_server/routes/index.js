const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); 
const ctrlOthers = require('../controllers/others');

/* Airlines pages */
router.get('/', ctrlLocations.login);
router.get('/register', ctrlLocations.registration);
router.get('/airlinesList', ctrlLocations.airlinesList);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;


