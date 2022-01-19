const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('../server/Routes/products/products');

dotenv.config({path: ".env"})
const app = express();
app.use(cors());
//Initialize parser for post request body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static page format setted up
app.use(express.static(path.join(__dirname, "../public")))

// Routes coming from products
app.use('/products', productRouter)

//connecting database
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, _) => {
  if(err) {
    console.log('connection error')
    console.log(err)
  } else {
    app.listen(process.env.HOST || 3000, () => {
    console.log(`server listening at http://localhost:${process.env.HOST || 3000}`);
})
  }
});
