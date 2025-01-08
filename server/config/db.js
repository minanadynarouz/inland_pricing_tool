import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

//Connect to DB once server start
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: "inland_db",
  waitForConnections: true,
  connectionLimit: 34,
  queueLimit: 0
});