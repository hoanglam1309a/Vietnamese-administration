const data = require("./db.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 6000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});
