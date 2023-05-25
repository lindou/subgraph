import { apolloServer } from './graphql/apollo-server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import { DeviceAPI } from './graphql/datasources/device-api';

export const main = startServerAndCreateLambdaHandler(
    apolloServer,
    // We will be using the Proxy V2 handler
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    {
      async context() {
        return {
            deviceAPI: new DeviceAPI()
          }
      },
    }
);
