import express, {
    Request,
    Response,
    NextFunction
} from 'express'

import { CustomMiddleWareModel } from './requestCustomTypes';

const jwt = require('jsonwebtoken')

const dotenv = require('dotenv');
dotenv.config();




// const token = () => {
//     return {
//         access(email: string){
//             return jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {
//                 expiresIn: '5m'
//             })
//         },
//         refresh(email: string){
//             return jwt.sign({email}, process.env.REFRESH_TOKEN_SECRET, {
//                 expiresIn: '30m'
//             });
//         }
//     }
// }

// exports.authenticate = (req: Request , res: Response, next: NextFunction) => {
//     if(req.query.email === ''){
//         req.authData = {
//             status: 200,
//             message : 'Correct User Data',
//             jwt: {
//                 accessToken: token().access(req.query.email),
//                 refreshToken: token().refresh(req.query.email)
//             }
//         };
//     } else{
//         req.authData = {
//             status: 400,
//             message: 'Not Correct User Data'
//         }
//     }
// }

// const CustomMiddleWare = (req: CustomMiddleWareModel, res: Response, next: NextFunction) => {
//     req.authData = {
//         status: 200,
//         jwt: {
//             accessToken: To
//         }
//     }
// }