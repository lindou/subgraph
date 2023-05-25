import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { readFileSync } from 'fs';
import gql from 'graphql-tag';
import path from 'path';
import { DeviceAPI } from './datasources/device-api';

const typeDefs = gql(readFileSync(path.join(__dirname, 'device.graphql'), { encoding: 'utf-8' }));

interface DeviceContext{
    deviceAPI: DeviceAPI
}


export const apolloServer = new ApolloServer<DeviceContext>({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    // data sources
});
