const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  products: Array,
  geoLocation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
});

module.exports = mongoose.model('Business', businessSchema);

