import express from 'express';
import path from 'path';
import { fileURLToPath  } from 'url';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import productRouter from '../server/Routes/products/products.js';

dotenv.config({path: ".env"})
console.log(process.env.HOST)
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
// Routes coming from products
app.use('/products', productRouter)

// Static page format setted up
app.use(express.static(path.join(__dirname, "../public")))

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
