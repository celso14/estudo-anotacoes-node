import { Router } from "express";
import * as apiController from '../controllers/apiController';

const router = Router();


router.get('/ping', apiController.ping);
router.get('/random', apiController.random);
router.get('/nome/:nome', apiController.nome);

//Endpoints das frases
router.post('/frases', apiController.createPhrase);
router.get('/frases', apiController.listPhrases);
router.get('/frases/:id', apiController.getPhrases);
router.put('/frases/:id', apiController.updatePhrase);
router.delete('/frase/:id', apiController.deletePhrase);


export default router;