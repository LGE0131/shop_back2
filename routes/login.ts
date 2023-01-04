// import express, {
//     Request,
//     Response,
//     NextFunction
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


// router.post('/login', (req: Request, res: Response) => {
//     console.log('응답성공!')
//     const user = req.body
//     console.log(user);

//     const password = user.userPw;
//     const email = user.userEmail;

//     const sql = "SELECT * FROM users WHERE email = ? AND password = ?;";

//     connection.connect();

//     connection.query(sql, [email, password], (error: any, results: any, fields: any) => {
//         if (email && password) {
//             if (error) throw error;
//             if (results.length > 0) {
//                 if (results[0].email == email && results[0].password == password) {
//                     console.log('로그인 성공');
//                     res.send('로그인 성공');
//                 } else {
//                     console.log('로그인 실패');
//                     res.send('로그인 실패');
//                 }
//             } else {
//                 console.log('유저 정보 없음');
//                 res.send('유저 정보 없음');
//             }
//         } else {
//             console.log('아이디 또는 비밀번호 미입력');
//             res.send('아이디 또는 비밀번호 미입력');
//         }
//     })
// })
  

// module.exports = router;