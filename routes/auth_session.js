import { Router } from "express";
import { nanoid } from "nanoid"; // Genera id para desarrollo
import authByEmailPwd  from "../helpers/authByEmailPwd.js";

const authSessionRouter = Router();


const sessions = [];
authSessionRouter.post('/login', (req,res) => {
    const {email, password} = req.body; 

    if(!email || !password) return res.sendStatus(400);

    try{
        authByEmailPwd(email,password);
        const sessionId = nanoid();
        sessions.push({sessionId}); 
        res.cookie('SessionsID', sessionId, {
            httpOnly: true,
        });
        
        return res.send();
    }catch(err){
        return res.sendStatus(401);

    }
});

authSessionRouter.get('/profile', (req,res) => {
    console.log(req.cookies);
    return res.send();
});

export default authSessionRouter;