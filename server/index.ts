import * as Koa from 'koa'
import * as parser from 'koa-bodyparser';
import * as Router from 'koa-router'

// import graffiti from '@risingstack/graffiti';
// import schema from './schema';

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'w00t';
})

// app.use(parser({
//   strict: false,
// }));

app.use(router.routes())
app.use(router.allowedMethods())

// app.use(async (ctx) => {
//   ctx.body = 'Hello World';
// });

// app.use(convert(graffiti.koa({
//   schema

// })));
// router.all('/graphql', convert(graphqlHTTP({
//   schema,
//   graphiql: true
// })));

// app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)
