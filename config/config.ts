const dotenv = require('dotenv');
dotenv.config();

export const config = {
    'host': process.env.MYSQL_HOST,
    'port': process.env.MYSQL_PORT,
    'user': process.env.MYSQL_HOST_USER,
    'password': process.env.MYSQL_HOST_PASSWORD,
    'database': process.env.MYSQL_DATABASE
}