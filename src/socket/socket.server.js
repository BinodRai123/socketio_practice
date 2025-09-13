const { Server } = require("socket.io");
const chatHandler = require("./chat");


function initSocketServer(httpServer){
    const io = new Server(httpServer,{});

    const DB = {} // {groupName:{AdminId, members}}
    
    io.on("connection",(socket) => {
        console.log("client connected", socket.id);

        /* handle user chat */
        chatHandler(io, socket);

        socket.on("CreateGroup",(groupName) => {
            
        })
        
    })
}


module.exports = initSocketServer;