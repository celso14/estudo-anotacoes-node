import { Request, Response } from 'express';
import User from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};


export const addUserAction = async (req: Request, res: Response) => {
    let newFirstName:string = req.body.firstName as string;
    let newLastName:string = req.body.lastName as string;
    let newEmail:string = req.body.email as string;
    let newAge:number = parseInt(req.body.age as string);
    let newInterests:Array<string> = (req.body.interests as string).split(',');

    let newUser = new User();
    newUser.name = {firstName:newFirstName, lastName: newLastName};
    newUser.email = newEmail;
    newUser.age = newAge;
    newUser.interests = newInterests;
    let resultado = await newUser.save();

    res.redirect('/');
};