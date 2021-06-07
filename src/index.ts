import express, { Application } from 'express';
import helmet from 'helmet';
import { logError, logRequest } from './services/logger';


class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.applyMiddleware();
    }

    /**
     * Apply express middlwares here
     */
    private applyMiddleware() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(logRequest);
        this.app.use(logError);
    }
}

const server = new Server();
export default server;
