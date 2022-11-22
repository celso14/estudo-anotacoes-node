import { Request, Response } from "express";
import { Product } from '../Models/Product';


export const home =  (request:Request, response:Response)=>{
    let age:number = 10;
    let showOld: boolean= false;

    if(age>50){
        showOld = true;
    }

    let list = Product.getAll;
    let expensiveList = Product.getFromPriceAfter(12);

    let user = {
        name: 'Celso',
        lastName: 'Brito',
        showOld,
        produts: list,
        expensives: expensiveList,
    }
    response.render('pages/home', { 
        user
    });
};