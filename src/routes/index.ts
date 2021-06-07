import { Application } from 'express';


class Routes {
    public app: Application;

    constructor(app: Application){
        this.app = app;
    }

    constuctRoutes(): void{
        this.app.get('/api/info', (_req, res) => {
            res.send('Hello World');
        });

        this.app.all('*', (_req, res) => {
            res.send('plis work');
        });

    }
}

export default Routes;
