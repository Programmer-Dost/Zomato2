import mongoose, { Schema } from "mongoose";

// Define the schema for the individual items in the form data
const restaurantItemSchema = new Schema({
  name: String,
  description: String,
});

// Define the main schema for the form data containing multiple items
const restaurantTypeSchema = new Schema({
  items: [restaurantItemSchema],
});
const restaurantSchema = new Schema({
  restaurantName: String,
  // required: true,
  restarantContactNumber: Number,
  // required: true,
  restaurantEmail: String,
  // required: true,
  restaurantAddress: String,
  // required: true,
  restaurantLat: Number,
  // required: true,
  restaurantLng: Number,
  // required: true,
  restaurantType: restaurantTypeSchema,
});
mongoose.models = {};
const Restaurant =
  mongoose.model.Restaurant || mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
