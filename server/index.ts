import * as Koa from "koa";
import * as parser from "koa-bodyparser";
import * as Router from "koa-router";
import { apolloKoa, graphiqlKoa } from "apollo-server";

import schema from "../schema";

const app = new Koa();
const router = new Router();

app.use(parser());

const endpointURL = "/graphql";
router.post(endpointURL, apolloKoa({ schema }));
router.get("/", graphiqlKoa({ endpointURL }));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888);
