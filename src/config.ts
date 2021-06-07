import utils from './utils';

interface iconfigObject {
    PORT: number;
}

interface iConfig {
    [key: string]:  iconfigObject
}

const CONFIG: iConfig = {
    development: {
        PORT: 8000
    },
    production: {
        PORT: 80
    },
    test: {
        PORT: 8000
    }
};

const config = CONFIG[utils.getEnvironment()];

export default config;

