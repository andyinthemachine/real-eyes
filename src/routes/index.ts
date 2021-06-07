import { Application } from 'express';
import { getInfo } from '../controller';

class Routes {
    public app: Application;

    constructor(app: Application){
        this.app = app;
    }

    constuctRoutes(): void{
        this.app.get('/api/info', getInfo);

        this.app.all('*', (_req, res) => {
            res.send('plis work');
        });

    }
}

export default Routes;
