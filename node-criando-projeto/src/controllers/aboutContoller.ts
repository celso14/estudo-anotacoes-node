import { Request, Response } from "express";



export const about = (request:Request, response:Response)=>{
    response.render('pages/sobre');
}