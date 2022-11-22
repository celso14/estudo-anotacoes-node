import { Request, Response } from "express";



export const nameForm = (request:Request, response:Response)=>{
    console.log("query string", request.query);

    let nome: string = request.query.nome as string;
    let idade: string = request.query.idade as string;  

    response.render('pages/nome',{
        nome,
        idade
    });
}