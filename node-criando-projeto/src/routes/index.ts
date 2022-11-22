import {Router} from 'express';

import * as homeController from '../controllers/homeController';
import * as contactController from '../controllers/contactController';
import * as aboutController from '../controllers/aboutContoller';
import * as nameFormController from '../controllers/nameFormController';
import * as ageFormController from '../controllers/ageFormController';


const router = Router();



router.get('/', homeController.home);


router.get('/contato', contactController.contact);


router.get('/sobre', aboutController.about);


router.get('/nome', nameFormController.nameForm);


router.get('/idade', ageFormController.ageForm);
router.post('/idade/resultado', ageFormController.ageFormResult);



export default router;