import express, {
  Request,
  Response,
  NextFunction
} from 'express'

import { routes } from './routes'

const axios = require('axios')
const cors = require('cors')

const app = express()
const port = 3030

axios.defaults.withCredentials = true;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

routes(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})