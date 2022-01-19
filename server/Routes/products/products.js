import express from 'express';
import Product from '../../models/Products'

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.send('We are on products')
})


export default productRouter;
