import 'module-alias/register';
import { apolloServer } from './graphql/apollo-server';
import { startStandaloneServer } from '@apollo/server/standalone';
import logger from '@lib/logger';
import { DeviceAPI } from './graphql/datasources/device-api';

async function startApolloServer() {
    const port = 4001;
    const subgraphName = 'device';

    try {
        const { url } = await startStandaloneServer(apolloServer, {
            async context() { 
                return {
                  deviceAPI: new DeviceAPI(),
                };
              },
            listen: { port },
        });

        logger.info(`🚀 Subgraph ${subgraphName} running at ${url}.`);
    } catch (error) {
        logger.error(error, 'Error in starting up apollo server.');
    }
}

startApolloServer();
