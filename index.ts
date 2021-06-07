import server from './src';
import config from './src/config';
import { logger } from './src/services/logger';

server.app.listen(config.PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${config.PORT}`);
});
