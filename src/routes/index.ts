import { Application } from 'express';
import { getInfo, encodeAsset, getMetadata, outputHls} from '../controller';
import { validateFileEncodeBody, validateMetadataQuery } from '../validator';

class Routes {
    public app: Application;

    constructor(app: Application){
        this.app = app;
    }

    constuctRoutes(): void{
        this.app.get('/api/info', getInfo);

        this.app.get('/api/metadata', validateMetadataQuery ,getMetadata)

        this.app.post('/api/encode', validateFileEncodeBody, encodeAsset);

        this.app.get('/api/outputhls', validateMetadataQuery, outputHls);

        this.app.all('*', (_req, res) => {
            res.send('Welcome to Real Eyes Api');
        });

    }
}

export default Routes;
