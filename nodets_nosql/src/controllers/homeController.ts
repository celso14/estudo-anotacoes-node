import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';
import { userInfo } from 'os';

export const home = async (req: Request, res: Response)=>{

    let vilhena = await User.findOne({ email : 'vilhena@email.com'});
    if(vilhena != null){
        vilhena.name.lastName = "Cordovil";
        await vilhena?.save();
    }

    await User.updateMany(
        { age: {$lte: 18} }, // primeiro parametro -> condição
        { age: 18 }          // segundo parametro -> o objeto que irá ser trocado   
    );

    //findOneAndDelete
    //findOne dps .remove()




    /*
    let newUser = new User();
    newUser.name = {firstName:'Ktita', lastName: 'Monte'};
    newUser.email = 'ktita@email.com';
    newUser.age = 35;
    newUser.interests = ['bolso','facismo'];
    let resultado = await newUser.save();
    */
    /* Primeiro metodo para criar usuarios
    let newUser = await User.create({
        name:{firstName: 'Maca', lastName:'Oliveira'},
        email:'maca@email.com',
        age:200,
        interests: ['arte', 'pizza']
    });
    */
    /*
    let usuarios = await User.find({
        age: { $gt: 18 }
    }).skip(0).limit(2); */
    //skip pula, e o limit é o limite por "página"
    /*console.log("users", usuarios);
    let oneUser = await User.findOne({
        email: 'fulano@email.com'
    })
    console.log("oneuser", oneUser?.name.firstName); // colocando entre aspas se pode achar o objeto dentro de outro objeto

    .sort({
        age: -1 // 1-> Ascendente | -1 -> Descendente
        "name.firstName":1,
        "name.lastName": 1
    })
    */
    let users = await User.find();
   

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