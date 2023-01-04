import express, {
  Request,
  Response,
  NextFunction
} from 'express';

const env = process.env.NODE_ENV || 'config';
const config = require('./config/config')[env];

const mysql = require('mysql');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3030;

axios.defaults.withCredentials = true;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// const signupRouter = require('./routes/signup')
// const loginRouter = require('./routes/login')
// const logoutRouter = require('./routes/logout')

// app.use('/signup2', signupRouter)
// app.use('/login', loginRouter)
// app.use('/logout', logoutRouter)

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).send('Not Found');
// });

const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
})

app.post('/signup2', (req: Request, res: Response) => {
  res.send('응답성공!')
  const user = req.body
  console.log(user);

  const name = user.userName;
  const password = user.userPw;
  const email = user.userEmail;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?);";
  const params = [name, password, email]

  connection.connect();

  connection.query(sql, params, (error: any) => {
    if (error) throw error;
    console.log('1 record inserted');
  });

  // connection.query('SELECT * from Users', (error: any, rows: any, fields: any) => {
  //   if (error) throw error;
  //   console.log('User info is: ', rows);
  // });

  connection.end()
})

app.post('/login', (req: Request, res: Response) => {
  console.log('응답성공!')
  const user = req.body
  console.log(user);

  const password = user.userPw;
  const email = user.userEmail;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?;";

  connection.connect();

  connection.query(sql, [email, password], (error: any, results: any, fields: any) => {
    if (email && password) {
      if (error) throw error;
      if (results.length > 0) {
        if (results[0].email == email && results[0].password == password) {
          console.log('로그인 성공');
          res.send('로그인 성공');
        } else {
          console.log('로그인 실패');
          res.send('로그인 실패');
        }
      } else {
        console.log('유저 정보 없음');
        res.send('유저 정보 없음');
      }
    } else {
      console.log('아이디 또는 비밀번호 미입력');
      res.send('아이디 또는 비밀번호 미입력');
    }
  })
})

app.post('/logout', (req: Request, res: Response) => {
  req.body = 'null'
})


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})