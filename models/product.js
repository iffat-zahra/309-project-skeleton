var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  price: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  quantity: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'product');
module.exports = Product;
