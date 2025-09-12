const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("client2 is connected", socket.id);
  socket.emit("joinRoom", "room2");

  // send message with "text", not "message"
  socket.emit("chatMessage", { room: "room2", message: "hello everyone i am client 2" });
});

// listen for chat messages
socket.on("chatMessage", (data) => {
  console.log(`received message: ${data.text} from ${data.from}`);
});
