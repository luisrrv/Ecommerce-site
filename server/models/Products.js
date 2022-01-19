const mongoose = require('mongoose')

const productSchema = mongoose.ProductSchema({
  title:{
    type:String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price:{
    type: Number,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema)
