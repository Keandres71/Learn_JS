import { charactersRickMorty } from '../bbdd.js';

// Funcion para verificar y retornar user
const authByEmailPwd = (email,password) =>{
   
    const user = charactersRickMorty.find((user) => user.email === email);
    if(!user) throw new Error();

    if(user.password !== password) throw new Error();

    return user;
};

export default authByEmailPwd;