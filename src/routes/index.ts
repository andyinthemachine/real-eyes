import { Application } from 'express';
import { getInfo, encodeFile, getMetadata } from '../controller';
import { validateFileEncodeBody, validateMetadataQuery } from '../validator';

class Routes {
    public app: Application;

    constructor(app: Application){
        this.app = app;
    }

    constuctRoutes(): void{
        this.app.get('/api/info', getInfo);

        this.app.get('/api/metadata', validateMetadataQuery ,getMetadata)

        this.app.post('/api/encode', validateFileEncodeBody, encodeFile);

        this.app.all('*', (_req, res) => {
            res.send('Welcome to Real Eyes Api');
        });

    }
}

export default Routes;
