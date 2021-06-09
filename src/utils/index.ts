import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import axios from 'axios';
import { logger } from '../services/logger';

/**
 * fetch the current environment
 *  @returns string
 */
const getEnvironment = (): string => {
    return process.env.NODE_ENV || 'development';
}

/**
 * check if a key exists in an array
 * @param arraytoCheck 
 * @param possibleFields 
 * @returns 
 */
const determineMissingProperty = (arraytoCheck: string[], possibleFields: string[]): string[] => {
    return possibleFields.filter((value: string) => !arraytoCheck.includes(value))
}

const downloadFile = async (fileUrl: string): Promise<any> => {
    const fileName = path.basename(fileUrl);
    // The path of the downloaded file on our machine
    const localFilePath = path.normalize(__dirname + '/../../downloads/' + fileName);

    const response = await axios({
        method: 'GET',
        url: fileUrl,
        responseType: 'stream',
    });

    const writer = response.data.pipe(fs.createWriteStream(localFilePath));
   
    return [writer, localFilePath];
}; 

/**
 * encode a file with ffmpeg
 */
const encodeFile = (localFilePath: string, videoBitrate: string, videoCodec: string, url: string) => {
    const fileName = path.basename(url);
    const newPath = path.normalize(__dirname + '/../../downloads/' + `${fileName}.avi`);
    return new Promise(( resolve, reject) => {
        ffmpeg(localFilePath)
            .videoBitrate(videoBitrate)
            .videoCodec(videoCodec)
            .on('error', (err: any, stdout, stderr) => {
                if (err) {
                    reject(err.message);
                }
            })
            .save(newPath)
            .on('end', () => resolve(newPath));
    });
}

/**
 * Get file metadata
 * @param filePath 
 * @returns 
 */
const getMetadata = (filePath: any): Promise<any> => {
    return new Promise((
        resolve: any,
        reject: any
    ) => {
        ffmpeg.ffprobe(
            filePath,
            (err: any, metadata: {}) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(metadata);
            }
        );
    });
}

export default {
    getEnvironment,
    determineMissingProperty,
    downloadFile,
    encodeFile,
    getMetadata
}