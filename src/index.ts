import express, { Application } from 'express';
import helmet from 'helmet';
import { logError, logRequest } from './services/logger';
import Routes from './routes'

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this._applyMiddleware();
        this._applyRoutes(); 
    }

    /**
     * Apply Express routes
     * 
     */
    private _applyRoutes() {
        const routes = new Routes(this.app)
        routes.constuctRoutes()
    }

    /**
     * Apply express middlwares here
     * 
     */
    private _applyMiddleware() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(logRequest);
        this.app.use(logError);
    }
}

const server = new Server();
export default server;
