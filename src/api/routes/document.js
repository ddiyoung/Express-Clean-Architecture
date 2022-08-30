import Router from 'express';
import Documentservice from '../../services/document.js';

const route = Router();

export default (app) =>{
    app.use('/document', route);

    route.get("/test", async (req, res) =>{
        try{
            const result = await Documentservice.GetTest();

            res.send(result);
        }
        catch(e){
            console.log(e);
        }
    })
}