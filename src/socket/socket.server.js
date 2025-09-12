const { Server } = require("socket.io");
const chatHandler = require("./chat");


function initSocketServer(httpServer){
    const io = new Server(httpServer,{});
    
    io.on("connection",(socket) => {
        console.log("client connected", socket.id);

        /* handle user chat */
        chatHandler(io, socket);
        
    })
}


module.exports = initSocketServer;