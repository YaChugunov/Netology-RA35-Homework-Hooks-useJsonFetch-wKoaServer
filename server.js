const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody());

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Server is running';
});
//
router.get('/data', async (ctx, next) => {
  ctx.type = 'Content-Type; application/json';
  ctx.body = { message: 'Ok' };
});
//
router.get('/error', async (ctx, next) => {
  ctx.type = 'Content-Type; application/json';
  ctx.status = 500;
  ctx.body = { message: 'Internal Error' };
});
//
router.get('/loading', async (ctx, next) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 8000);
  });
  ctx.type = 'Content-Type; application/json';
  ctx.body = { img: 'loading.gif' };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port, 'localhost');
