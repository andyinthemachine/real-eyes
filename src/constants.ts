interface iInfo {
    name: string,
    version: string,
    routes: Array<{
        controller: string;
        description: string;
        method: string;
        uri: string;
        version: string;
    }>,
}

const INFO: iInfo = {
    name: 'REAL EYES API',
    version: '0.0.1',
    routes: [
      {
        uri: 'api/info',
        controller: 'getInfo',
        description: 'This is a simple Api endpoint for fetching data about this project',
        method: 'GET',
        version: '1'
      },
    ]
};
  
export {
    INFO,
}