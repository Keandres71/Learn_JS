import { Router } from "express";
import authByEmailPwd from "../helpers/authByEmailPwd.js";

const authTokenRouter = Router();


// jsonwebtoken = 

authTokenRouter.post('/login', (req,res) => {
    const {email, password} = req.body; 

    if(!email || !password) return res.sendStatus(400);

    try{
        const user = authByEmailPwd(email,password);
        
        return res.send(`Usuario ${user.name} ha sido autenticado correctamente`);
    }catch(err){
        return res.sendStatus(401);

    }
});

authTokenRouter.get('/profile', (req,res) => {

    const user = charactersRickMorty.find(user => user.id === userSession.id);
    if(!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);
});

export default authTokenRouter; 