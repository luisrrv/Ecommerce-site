const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = Schema({
  title:{
    type:String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price:{
    type: String,
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
