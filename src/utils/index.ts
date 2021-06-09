import path from 'path';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import axios from 'axios';

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

/**
 * download a file via http
 * @param fileUrl 
 * @returns 
 */
const downloadFile = async (fileUrl: any): Promise<any> => {
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
        resolve,
        reject
    ) => {
        ffmpeg.ffprobe(
            filePath,
            (err, metadata) => {
                if (err) {
                    reject(new Error(err));
                }
                resolve(metadata);
            }
        );
    });
}


/**
 * Determine if a string is a valid URL
 * @param string 
 * @returns 
 */
const isUrl = (string: any): boolean => {
    try {
        new URL(string);
        return true;
      } catch (_) {
        return false;  
      }
}

export default {
    getEnvironment,
    determineMissingProperty,
    downloadFile,
    encodeFile,
    getMetadata,
    isUrl
}