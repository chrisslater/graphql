import * as graphql from 'graphql'
import * as Koa from 'koa'
import * as parser from 'koa-bodyparser'
import * as Router from 'koa-router'
import { apolloKoa, graphiqlKoa } from 'apollo-server'
import {
    buildSchemaFromTypeDefinitions,
    makeExecutableSchema,
    addMockFunctionsToSchema,
    addResolveFunctionsToSchema,
} from 'graphql-tools'
// import schema from '../data/schema';
// import mocks from '../data/mocks';
// import resolvers from '../data/resolvers';

const app = new Koa()
const router = new Router()

app.use(parser())

// const User =  new graphql.GraphQLObjectType({
//     name: 'User',
//     fields: {
//         name: { type: graphql.GraphQLString },
//     }
// })

// const exSchema = new graphql.GraphQLSchema({
//     query: new graphql.GraphQLObjectType({
//         name: 'Query',
//         fields: {
//             woot: { type: graphql.GraphQLString },
//             user: { type: User },
//         }
//     })
// })

const schema = `
    schema {
        query: Root
    }

    type Root {
        testString: String
        user: User
    }

    type User {
        name: String
    }
`

// const exSchema = makeExecutableSchema({
//     typeDefs: schema,
//     resolvers,
// })

const mocks = {
    String: () => 'It works!',
    User: () => ({
        name: 'Chris',
        age: () => '29',
    })
};

const resolvers = {
    Root: {
        user: () => 'yay',
        testString: () => 'W00t',
    },

    User: {
       name: () => 'USER',
    },
};

const exSchema = buildSchemaFromTypeDefinitions([ schema ])
addResolveFunctionsToSchema(exSchema, resolvers)
addMockFunctionsToSchema({ schema: exSchema, mocks })

const endpointURL = '/graphql';
router.post(endpointURL, apolloKoa({ schema: exSchema }))
router.get('/', graphiqlKoa({ endpointURL }))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
