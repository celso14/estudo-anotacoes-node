//primeiro se exporta para depois importar no arquivo que quiser
//module.exports.somar = somar;
//module.exports.subtrair = subtrair;
//module.exports.multiplicar = multiplicar;
export let ver = '1.0';

export function somar(x:number,y:number):number{
    return x + y;
}


export function multiplicar(x:number,y:number):number{
    return x * y;
}


export function subtrair(x:number,y:number):number{
    return x - y;
}

/*
export default{
    somar: somar,
    subtrair: subtrair,
    multiplicar: multiplicar,
}
*/