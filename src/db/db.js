import config from '../config/config.js';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: config.mysql_host,
    port: config.mysql_port,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.mysql_database,
    connectionLimit: 50
})

export default pool