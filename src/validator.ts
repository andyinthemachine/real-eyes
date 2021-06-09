import { Request, Response } from 'express';
import { errorResponse } from './services/response';
import utils from './utils';

/**
 * validate the encodeFile request Body
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
const validateFileEncodeBody = (req: Request, res: Response, next: () => void) => {
    if (!req.body.url || !req.body.videoBitrate || !req.body.videoCodec) {
        const missingValue = utils.determineMissingProperty(Object.keys(req.body), ['url', 'videoBitrate', 'videoCodec']);
        const errorMessage = `${missingValue.length === 1 ? missingValue[0] : missingValue.join(',')} is required  `;
        return res.status(400).json(errorResponse(errorMessage));
    }
    return next();
}

/**
 * Validate the Query params of the getMetadata controller
 * @param req 
 * @param res 
 * @param next 
 */
const validateMetadataQuery = (req: Request, res: Response, next: () => void) => {
    if (!req.query.asset) {
        return res.status(400).json(errorResponse('Please pass an asset query param'));
    }

    if(!utils.isUrl(req.query.asset)) {
        return res.status(400).json(errorResponse('Asset param should be a valid url'));
    }
   
    return next();
}

export {
    validateFileEncodeBody,
    validateMetadataQuery
}