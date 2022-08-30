import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({path : `${__dirname}/../.env`})

const config = {
    url_prefix: process.env.URL_PREFIX || "",
    port: process.env.PORT || 3001,
    mysql_host: process.env.MYSQL_HOST || "",
    mysql_port: process.env.MYSQL_PORT || 3306,
    mysql_user: process.env.MYSQL_USER || "",
    mysql_password: process.env.MYSQL_PASSWORD || "",
    mysql_database: process.env.MYSQL_DATABASE || "",
    secret: process.env.SESSION_SECRET || "",
};

export default config;
