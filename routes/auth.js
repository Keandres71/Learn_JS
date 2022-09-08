import { Router } from 'express'; //destructuring
//import { charactersRickMorty } from '../bbdd.js';
import authByEmailPwd from '../helpers/authByEmailPwd.js';


const authRouter = Router();


//Endpoint publico (No autenticado, ni autorizado)
authRouter.get('/public', (req,res) => res.send('Public Dashboard'));


authRouter.post('/autenticado', (req,res) => {
    const {email, password} = req.body; 

    if(!email || !password) return res.sendStatus(400);

    try{
        const user = authByEmailPwd(email,password);
        
        return res.send(`Usuario ${user.name} ha sido autenticado correctamente`);
    }catch(err){
        return res.sendStatus(401);

    }
});

authRouter.post('/autorizado', (req,res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.sendStatus(400);
    try{    
        const user = authByEmailPwd(email,password);
        
        if(user.role !== 'admin') return res.sendStatus(403);
        
        return res.send(`Usuario administrador ${user.name} `);
    }catch(err){
        return res.sendStatus(403);

    }
});


export default authRouter;

