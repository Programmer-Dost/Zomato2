import mongoose, { Schema } from "mongoose";

const dessertSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
const smallCakesSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
const largeCakesSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
const PastriesSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
});
mongoose.models = {};
const Dessert = mongoose.model.Dessert || mongoose.model("Dessert", dessertSchema);
const smallCakes = mongoose.model.smallCakes || mongoose.model("smallCakes", smallCakesSchema);
const largeCakes =mongoose.model.largeCakes || mongoose.model("largeCakes", largeCakesSchema);
const Pastries =mongoose.model.Pastries || mongoose.model("Pastries", PastriesSchema);

module.exports = { Dessert, smallCakes, largeCakes, Pastries };
