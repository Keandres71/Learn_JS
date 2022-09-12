import { Router } from "express";
import authByEmailPwd from "../helpers/authByEmailPwd.js";
import { SignJWT } from "jose";

const authTokenRouter = Router();


// jsonwebtoken = 

authTokenRouter.post('/login', async (req,res) => {
    const {email, password} = req.body; 

    if(!email || !password) return res.sendStatus(400);


    try{
        const { id } = authByEmailPwd(email,password);
        const jwtConstructor = new SignJWT({id}); // SE LE PASA EL ID COMO PAYLOAD

        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
        .setProtectedHeader({alg:'HS256', typ:'JWT'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.PRIVATE_TOKEN_KEY));

        return res.send({jwt});
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