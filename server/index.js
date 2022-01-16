import express from 'express';
import path from 'path';
import { fileURLToPath  } from 'url';
import cors from 'cors'

const app = express();
const port = 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.static(path.join(__dirname, "../public")))


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
})
