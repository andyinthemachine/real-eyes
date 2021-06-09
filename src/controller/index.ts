import { Request, Response } from 'express';
import { unlinkSync } from 'fs';

import { INFO } from '../constants';
import { logger } from '../services/logger';
import { errorResponse, successResponse } from '../services/response';
import utils from '../utils';


/**
 * Fetch api information.
 * @param req Request object
 * @param res Response object
 * @returns json
 */
const getInfo = (req: Request, res: Response): any => {
    try {
        return res.status(200).json(successResponse(INFO));
    }  catch(error) {
        return res.status(500).json({ message: error.message });
    }
};


const encodeFile = async (req: Request, res: Response) => {
    try {
        const [writer, localPath] = await utils.downloadFile(req.body.url);
        writer.on('finish',async () => {
            logger.info('Successfully downloaded file');
            const newPath = await utils.encodeFile(localPath, req.body.videoBitrate, req.body.videoCodec, req.body.url)
            logger.info('Successfully encoded file');
            const metadata = await utils.getMetadata(newPath);
            return res.status(200).json(successResponse(metadata));
        });
  } catch(error) {
        return res.status(500).json(errorResponse('There was a problem ecoding this file', 500));
    }
}

export {
    getInfo,
    encodeFile
}