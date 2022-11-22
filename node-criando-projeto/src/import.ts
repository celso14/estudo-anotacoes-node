//Import de biblioteca de terceiros
import validator from 'validator';
//bilbioteca importantisssima Nodemon
//fica monitorando modificações no arquivo node


const ip = '127.0.5.655555';
console.log(validator.isEmail('celso.botelho16@gmail.com'));
console.log(validator.isIP(ip));