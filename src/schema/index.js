import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import {makeExecutableSchema} from 'graphql-tools';
import path from 'path';

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname,'./typeDefs')))
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname,'./resolvers')))

export default makeExecutableSchema({
    typeDefs,
    resolvers
})