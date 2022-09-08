import { Router } from "express";
import { nanoid } from "nanoid"; // Genera id para desarrollo
import { charactersRickMorty } from "../bbdd.js";
import authByEmailPwd  from "../helpers/authByEmailPwd.js";

const authSessionRouter = Router();


const sessions = [];
authSessionRouter.post('/login', (req,res) => {
    const {email, password} = req.body; 

    if(!email || !password) return res.sendStatus(400);

    try{
        const { id } = authByEmailPwd(email,password);
        const sessionId = nanoid();
        sessions.push({sessionId, id}); 
        res.cookie('sessionId', sessionId, {
            httpOnly: true,
        });
        
        return res.send();
    }catch(err){
        return res.sendStatus(401);

    }
});

authSessionRouter.get('/profile', (req,res) => {
    const {cookies} = req;
    if(!cookies.sessionId) return res.sendStatus(401);

    const userSession = sessions.find((session) => session.sessionId === cookies.sessionId);
    if(!userSession) return res.sendStatus(401);

    const user = charactersRickMorty.find(user => user.id === userSession.id);
    if(!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);
});

export default authSessionRouter;