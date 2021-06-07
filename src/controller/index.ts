import { Request, Response } from 'express';
import { INFO } from '../constants';
import { successResponse } from '../services/response';


/**
 * Fetch api information.
 * @param req Request object
 * @param res Response object
 * @returns json
 */
const getInfo = (req: Request, res: Response): any => {
    try {
        return res.status(200).json(successResponse(INFO))
    }  catch(error) {
        return res.status(500).json({ message: error.message });
    }
};


export {
    getInfo
}