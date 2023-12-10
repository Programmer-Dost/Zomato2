const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
});
const smallCakesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
const largeCakesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
const PastriesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
mongoose.models = {}
const Dessert = mongoose.model('Dessert', dessertSchema);
const smallCakes = mongoose.model('smallCakes', smallCakesSchema);
const largeCakes = mongoose.model('largeCakes', largeCakesSchema);
const Pastries = mongoose.model('Pastries', PastriesSchema);

module.exports = {Dessert, smallCakes, largeCakes, Pastries};
