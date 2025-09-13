
function chatHandler(io, socket){
    // listen for joinRoom event from client
        socket.on("joinRoom",(room) => {
            socket.join(room);
            console.log(`${socket.id} joined ${room}`);

            //broadcasting new user joined
            socket.to(room).emit("message", {
                from:"server",
                text:`a new user ${socket.id} joined ${room}`
            })
        })

        //Client sent chat messages
        socket.on("chatMessage", ({ room, message }) => {
            console.log(`Message from ${socket.id} to ${room}: ${message}`);

            //verifying if the user in the room or not
            if(socket.rooms.has(room)){
                //broadcasst to everyone in the room
                io.to(room).emit("chatMessage", {
                    from: socket.id,
                    text: message,
                });
            }
            else{
                console.log(`${socket.id} tried to send message to ${room} without joining`);
                socket.emit("error", "You are not in this room!");
            }
        });
}

module.exports = chatHandler;