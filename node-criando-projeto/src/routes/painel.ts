import {Router, Request, Response} from 'express';


const router = Router();

router.get('/', (request:Request, response:Response)=>{
    response.send('Home do Painel');
});

router.get('/Noticias', (request:Request, response:Response)=>{
    response.send('Lista de noticias personalizadas');
});

export default router;