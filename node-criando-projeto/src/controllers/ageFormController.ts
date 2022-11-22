import { Request, Response } from "express";



export const ageForm = (request:Request, response:Response)=>{
    response.render('pages/idade', {});
};

export const ageFormResult = (request:Request, response:Response)=>{ 
    let mostrarIdade : boolean=false;
    let idade: number = 0;

    if(request.body.anoNascimento){
        let anoNascimento: number = parseInt(request.body.anoNascimento as string);
        const anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    response.render('pages/idade', {
        idade,
        mostrarIdade
    });
};