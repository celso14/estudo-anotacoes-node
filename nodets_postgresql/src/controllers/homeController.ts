import { Request, Response } from 'express';
import { Op, where } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    //Consultas


    //Op de consultas
    let users = await User.findAll(/*{
        where: {
            age: {
                //gt -> greather then, lT-> lower then, e -> equal, notIn ->
                [Op.gte]: 18,   // Op.like 'Pa%' -> procura todos que começam com a
            }
        },
        order: [
            ['age','DESC'],
            ['name','DESC']
        ],
        limit: 2
    }*/);

    //let search name = 'pa' -> colocar como uma template string
    
    //Ordenar Resultados


    //inserir dados
    /*
    //build + save
    const user =  User.build({
        name: 'Fulaninho',
        age:26
    });
    await user.save();
    */

    /*
    //create
    const user = await User.create({
        name:"Ciclano",
        age:39
    })
    */

    /*
    //Atualização geral dos dados
    await User.update({
        name:'Seu Chico', age:56
    }, // primeiro parametro
    {
        where: {
            id: 4
        }
    }//segundo parametro -> funciona Op também
    );
    */

    /*
    //atualização especifica de usuarios
    let result  = await User.findAll({
        where: {
            id: 5
        }
    });
    if(result.length > 0){
        let user_finded = result[0];
        user_finded.age = 70;
        user_finded.name = 'Beltrano'
        await user_finded.save();
    }
    */


    /*
    //Deletar dados
    //1
    await User.destroy({
        where:{
            age: {
                [Op.lte]: 18
            }
        }
    });
    //2
    let results = await User.findAll({
        where: {name:'Ciclano'}
    });
    if(results.length > 0){
        let user_finded = results[0];
        await user_finded.destroy();
    }
    */

    //Metodos Finder
    let user_findone = await User.findOne({
        where: {
            id: 5
        }
    });
    console.log(user_findone);

    let user_findid = await User.findByPk(15);
    console.log(user_findid);

    /////findorcreate
    const [user_und, created] = await User.findOrCreate({
        where: { name: 'Ciclano' },
        defaults: {
            name: 'Ciclano',
            age:18
        }
    });

    console.log("Usuario", user_und);
    console.log("Created", created)
    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

export const novoUsuario = async (req: Request, res:Response) => {

    if(req.body.name && req.body.age){
        const name:string = req.body.name as string;
        const age:number = parseInt(req.body.age as string); 

        const userInfo = await User.create({
            name:name,
            age:age
        })
    }
    else if(req.body.name){
        const name:string = req.body.name as string;

        const userInfo = await User.create({
            name:name,
        })
    }


    res.redirect('/');
};


