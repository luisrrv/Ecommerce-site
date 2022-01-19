import mongoose from 'mongoose';

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

export default mongoose.model('Product', new productSchema());
