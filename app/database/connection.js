const mongoose = require('mongoose');
// const { Dessert } = require('./mongooseSchema');

mongoose.connect(`${process.env.MongoDB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// export const desserts = Dessert.find({});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
