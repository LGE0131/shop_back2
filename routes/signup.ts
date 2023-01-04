// import express, {
//   Request,
//   Response,
//   NextFunction
// } from 'express';

// const env = process.env.NODE_ENV || 'config';
// const config = require('../config/config')[env];

// const router = express.Router();

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: config.host,
//     port: config.port,
//     user: config.user,
//     password: config.password,
//     database: config.database,
// })

// router.post('/signup2', (req: Request, res: Response) => {
//     res.send('응답성공!')
//     const user = req.body
//     console.log(user);
  
//     const name = user.userName;
//     const password = user.userPw;
//     const email = user.userEmail;
  
//     const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?);";
//     const params = [name, password, email]
  
//     connection.connect();
  
//     connection.query(sql, params, (error: any) => {
//       if (error) throw error;
//       console.log('1 record inserted');
//     });
  
//     // connection.query('SELECT * from Users', (error: any, rows: any, fields: any) => {
//     //   if (error) throw error;
//     //   console.log('User info is: ', rows);
//     // });
  
//     connection.end()
// })

// module.exports = router