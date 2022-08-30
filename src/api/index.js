import express, { Router } from 'express';
import document from './routes/document.js';


export default () => {
    const app = Router();

    document(app);

    return app
}