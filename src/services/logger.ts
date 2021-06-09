import winston from 'winston';
import { Request, Response, ErrorRequestHandler } from 'express';

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

const logRequest = (req: Request, res: Response, next: () => void) :void => {
    logger.info(req.url);
    next();
}

const logError = (err: ErrorRequestHandler, req: Request, res: Response, next: () => void): void => {
    logger.error(err);
    next();
}

export {
    logger,
    logRequest,
    logError
};
