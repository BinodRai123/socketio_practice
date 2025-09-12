const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect",() => {
    console.log("client 1 is connected", socket.id);
    socket.emit("joinRoom","room1");
})

//listen message from room
socket.on("chatMessage", (data) => {
  console.log(`received message : ${data.text} from ${data.from}`);
});