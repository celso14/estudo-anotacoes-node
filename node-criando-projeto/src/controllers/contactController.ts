import { Request, Response } from "express";



export const contact = (request:Request, response:Response)=>{
    response.render('pages/contato');
};