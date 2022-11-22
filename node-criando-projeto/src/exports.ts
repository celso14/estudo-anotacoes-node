//Importando antigo
//const matematica = require('./mat');
//

//novo metodo
//import * as matematica from './mat' //importando tudo
import {somar , subtrair} from './mat';

//export default
//import matematica from './mat'

let n1: number = 10;
let n2: number = 2;


console.log(`Soma:${somar(n1,n2)}`)
console.log(`Subtração:${subtrair(n1,n2)}`)
//console.log(`Subtração:${matematica.multiplicar(n1,n2)}`)
//console.log(`${matematica.ver}`)
