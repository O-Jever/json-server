const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('data.json');

server.use(cors());
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
});
