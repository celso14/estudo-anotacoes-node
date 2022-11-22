import { unlink } from 'fs/promises';
import {Request, Response} from 'express';
import sharp from 'sharp';

export const uploadFile = async (req: Request, res: Response) => {
    //const files = req.files as {[fieldname: string]:Express.Multer.File[]}; //Diz para o TS que esse array de files é do multer e pode ter um titulo com nome aleatório.
    //mais interessante usar o single ou array


    /*
    //outra opção
    const files = req.files as {
        avatar: Express.Multer.File[],
        gallery: Express.Multer.File[]
    }*/

    //No banco de dados se salva a referência do nome do arquivo
    if(req.file){
        let filename = `${req.file.filename}.jpg`

        await sharp(req.file.path)
        .resize(300,300,{
            fit: sharp.fit.cover
        })
        .toFormat('jpeg')
        .toFile(`./public/media/${filename}`);
        await unlink(req.file.path);

        res.status(200).send({image: `${filename}`});
    }
    else{
        return res.status(400).send({error: "Arquivo inválido."});
    }
}



