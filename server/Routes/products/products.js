const express = require('express')
const Product = require('../../models/Products')

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.send('We are on products')
})
//post request to add data to the database
productRouter.post('/', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url
  })
  const savedProduct = await product.save()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json({ message: err })
  })
})

module.exports = productRouter;
