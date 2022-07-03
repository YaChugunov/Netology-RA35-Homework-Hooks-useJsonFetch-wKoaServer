const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody());

const router = new Router();
//
const srvOk = (ctx) => {
  ctx.body = 'Сервер запущен';
};
router.get('/', srvOk);
//
router.get('/data', async (ctx, next) => {
  ctx.response.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = { status: '200', data: 'Ok' };
});
//
router.get('/error', async (ctx, next) => {
  ctx.response.status = 500;
  ctx.set('Content-Type', 'application/json');
  ctx.body = { status: '500', data: 'Error' };
});
//
router.get('/loading', async (ctx, next) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  ctx.set('Content-Type', 'application/json');
  ctx.body = { status: '---', data: 'Loading' };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
const server = http.createServer(app.callback());
server.listen(port);
