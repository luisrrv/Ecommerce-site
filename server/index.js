import express from 'express';
import path from 'path';
import { fileURLToPath  } from 'url';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({path: ".env"})
console.log(process.env.HOST)
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.static(path.join(__dirname, "../public")))


app.listen(process.env.HOST || 3000, () => {
  console.log(`server listening at http://localhost:${process.env.HOST || 3000}`);
})
