import express from 'express';

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  res.send('We are on products')
})

export default productRouter;
