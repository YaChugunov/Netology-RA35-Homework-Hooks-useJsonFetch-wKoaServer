const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
app.use(cors());
app.use(koaBody());

const router = new Router();

const requestListener = (req, res) => {
  console.log('Request is Incoming');

  const responseData = {
    message: 'Hello!',
    articleData: {
      articleName: 'How to send JSON response from NodeJS',
      category: 'NodeJS',
      status: 'published',
    },
    endingMessage: 'Visit Geeksforgeeks.org for more',
  };

  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(requestListener);

server.listen(3000, 'localhost', function () {
  console.log('Server is Listening at Port 3000!');
});
