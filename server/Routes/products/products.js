const express = require('express')
const Product = require('../../models/Products')

const productRouter = express.Router()

//get Data from data base
productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products)
  } catch(err) {
    res.json({ message: err })
  }
})

//get a specific product

productRouter.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product)
    res.json(product);
  } catch(err) {
    res.json({ message: err })
  }
})
//post request to add data to the database
productRouter.post('/', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url
  });
  try{
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch(err) {
    res.json({ message: err })
  }
})

module.exports = productRouter;
