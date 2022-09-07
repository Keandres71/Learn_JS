import {Router} from 'express';
import { charactersRickMorty } from '../bbdd.js';

//ROUTER (express) = Agrupar un conjunto de rutas
const profileRouter = Router();

//OBTENER
profileRouter.get("/:id", (req,res) => {
    const {id} = req.params; //Recuperando propiedad de (params) 'Destructuring'
    const character = charactersRickMorty.find((character) => character.id === id);
    if(!character) return res.sendStatus(404);

    return res.send(character);
});

//CREAR
profileRouter.post('/', ( req, res ) => {

});
//ACTUALIZAR
profileRouter.patch('/', ( req, res ) => {

});
//ELIMINAR
profileRouter.delete('/', ( req, res ) => {
    
});

export default profileRouter;