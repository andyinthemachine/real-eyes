import { Application } from 'express';
import { getInfo, encodeFile } from '../controller';
import { validateFileEncodeBody } from '../validator';

class Routes {
    public app: Application;

    constructor(app: Application){
        this.app = app;
    }

    constuctRoutes(): void{
        this.app.get('/api/info', getInfo);

        this.app.post('/api/encode', validateFileEncodeBody, encodeFile);

        this.app.all('*', (_req, res) => {
            res.send('plis work');
        });

    }
}

export default Routes;
