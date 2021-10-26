const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true},
  email: {
  type: String,
  required: true},
  number: {
  type: String,
  required: true}  
});

const reviewSchema = new mongoose.Schema({
author: String,
rating: {
type: Number,
required: true,
min: 0,
max: 5
},
reviewText: String,
createdOn: {
type: Date,
'default': Date.now
}
});

const airlineSchema = new mongoose.Schema({
  name: {type: String, required: true},
  rating: {type: Number, "default": 0, min: 0, max: 5},
  operatingSince: String,
  reviews: [reviewSchema]
});

