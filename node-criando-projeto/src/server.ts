import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());


server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true})); //Habilitando pegar dados pelo metodo Post pela rota

server.use(mainRoutes); // já está na raiz do servidor, não precisa de um prefixo


server.use('/painel', painelRoutes);
server.use((request:Request, response:Response) => {
    response.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);





















/*
//METODOS GET, POST
server.get('/', (request: Request, response: Response) => {
    response.send('Hello World!');
});


server.get('/noticia/:slug', (request: Request, response: Response) => {
    let slug = request.params.slug;
    response.send(`Noticia: ${slug}`);
});

server.get('/voo/:origem-:destino', (request: Request, response: Response) => {
    let origem = request.params.origem;
    let destino = request.params.destino;
    response.send(`Voo: ${origem} - ${destino}`);
});
*/


