require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const initSocketServer = require("./src/socket/socket.server");

const httpServer = createServer(app);

initSocketServer(httpServer);



httpServer.listen(3000,() => {
    console.log("server is running on port 3000");
})