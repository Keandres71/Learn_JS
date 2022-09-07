import { Router } from 'express'; //destructuring
import { charactersRickMorty } from '../bbdd.js';


const authRouter = Router();

authRouter.get('/public', (req,res) => res.send('Public Dashboard'));

authRouter.post('/autenticado', (req,res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.sendStatus(400);

    const user = charactersRickMorty.find((user) => user.email === email);
    if(!user) return res.sendStatus(401);

    if(user.password !== password) return res.sendStatus(401);

    res.send(`Usuario ${user.name} ha sido autenticado correctamente`);
});

authRouter.post('/autenticado', (req,res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.sendStatus(400);

    const user = charactersRickMorty.find((user) => user.email === email);
    if(!user) return res.sendStatus(401);

    if(user.password !== password) return res.sendStatus(401);

    if(user.role !== 'admin') return res.sendStatus(403);

    res.send(`Usuario administrador ${user.name} `);
});


export default authRouter;

