const { Server } = require("socket.io");
const chatHandler = require("./chat");
const groupModel = require("../models/group.model");

function initSocketServer(httpServer){
    const io = new Server(httpServer,{});
    

    io.on("connection",(socket) => {
        console.log("client connected", socket.id);

        /* handle user chat */
        chatHandler(io, socket);

        socket.on("createGroup",async (groupName) => {
            const isGroupAlreadyExist = await groupModel.findOne({groupName: groupName})
            if(isGroupAlreadyExist) return socket.emit("error", "group is already Exist");

            await groupModel.create({
                groupName: groupName,
                adminId: socket.id, // Change into user Id From Db
                members: new Set([socket.id]) //change into user Id from DB
            })

            socket.emit("groupCreated",{groupName, admin: socket.id});
        })
        
    })
}


module.exports = initSocketServer;