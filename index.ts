import server from './src';
import config from './src/config';
import { logger } from './src/services/logger';

server.app.get('/', (req, res) => res.send('Real Eyes Media'));

server.app.listen(config.PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${config.PORT}`);
});
