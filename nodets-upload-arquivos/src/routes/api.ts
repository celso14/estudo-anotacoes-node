import { Router, Request, Response } from 'express';
import multer from 'multer';
import { createBrotliCompress } from 'zlib';
import * as ApiController from '../controllers/apiController';

const router = Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');

    },
    filename: (req, file, cb) => {
        const randomName = Math.floor(Math.random() * 99999999);
        cb(null, file.fieldname+randomName+'-'+Date.now()+'.jpg')
    }
});
//Atenção quando usar por ele usar recurso da RAM
//const storage = multer.memoryStorage()

//filefilter filtra os arquivos -> geralmente se filtra pelo tipo de arquivo
const upload = multer({
    storage: storage,
    fileFilter(req, file, callback) {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        callback(null, allowed.includes(file.mimetype));
    },
    limits: {
        fieldSize: 8000000
    }
})


router.post('/upload', upload.single('avatar'),ApiController.uploadFile);




export default router;