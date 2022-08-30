import express from 'express';
import config from './config/config.js';
import expressLoader from './loaders/express.js';


const app = express();

expressLoader({ app });

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("[server]: Server is running!!")
})

export default app;