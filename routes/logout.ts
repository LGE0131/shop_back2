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

// router.post('/logout', (req: Request, res: Response) => {
//     req.body = 'null'
// })

// module.exports = router;