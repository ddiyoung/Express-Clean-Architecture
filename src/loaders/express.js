import express from 'express';
import config from '../config/config.js';
import routes from "../api/index.js";
import bodyParser from 'body-parser';
import session from "express-session";
import cors from 'cors';

const allowlist = ['http://localhost:3000'];

const corsOps = {
    origin: allowlist,
    credentials: true,
}

const sessionOps = {
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
}

const document_path = "../src/assets/";

export default ({ app }) => {
    app.use(cors(corsOps));
    app.use(session(sessionOps));
    app.use(express.static(document_path));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(config.url_prefix, routes())
}
