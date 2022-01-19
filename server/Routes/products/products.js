const express = require('express')


const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.send('We are on products')
})


module.exports = productRouter;
