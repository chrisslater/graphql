import 'isomorphic-fetch';
import * as Koa from 'koa';
import * as parser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import { apolloKoa, graphiqlKoa } from 'apollo-server';

import schema from '../schema';

const app = new Koa();
const router = new Router();

app.use(parser());
app.use(logger());

const endpointURL = '/';
/**
 * TODO: This needs to become an environment var so that it will work on both on
 * local dev and deployed on a proxy url.
 */
const viewerEndpointURL = '/graphql/';
router.post(endpointURL, apolloKoa({ schema }));
router.get('/viewer', graphiqlKoa({ endpointURL: viewerEndpointURL }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
