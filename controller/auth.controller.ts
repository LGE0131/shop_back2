import express, {
    Request,
    Response,
    NextFunction,
    Router
} from 'express'

const env = process.env.NODE_ENV || 'db';
const dbConfig = require('../config/db')[env]

const mysql = require('mysql');
const jwt = require('jsonwebtoken')

const connection = mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
})



export const Signup = (req: Request, res: Response) => {

    connection.connect();

    const generateAccessToken = (id: any) => {
        return jwt.sign({
            id
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1m',
        });
    };

    const generateRefreshToken = (id: any) => {
        return jwt.sign({
            id
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '30m',
        });
    };

    const user = req.body
    console.log(user);

    const name = user.userName;
    const password = user.userPw;
    const email = user.userEmail;

    let accessToken = generateAccessToken(email)
    let refreshToken = generateRefreshToken(email)

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?);";
    const params = [name, password, email]

    connection.query(sql, params, (error: any) => {
        if (error) {
            res.send('실패')
            return false
        };
        res.send('응답성공!')
        console.log('1 record inserted');
    });

    // connection.query('SELECT * from Users', (error: any, rows: any, fields: any) => {
    //   if (error) throw error;
    //   console.log('User info is: ', rows);
    // });

    connection.end()
}

export const Login = (req: Request, res: Response) => {
    
    const user = req.body
    console.log(user);

    const password = user.userPw;
    const email = user.userEmail;

    // let token;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?;";

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
        // token = results[0].accessToken
    })

}

