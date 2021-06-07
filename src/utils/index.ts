/**
 * fetch the current environment
 *  @returns string
 */
const getEnvironment = (): string => {
    return process.env.NODE_ENV || 'development';
}

export default {
    getEnvironment,
}