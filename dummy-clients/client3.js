const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("client 3 is connected", socket.id);
  socket.emit("joinRoom", "room2");

  //send chat message
  socket.emit("chatMessage",{ room:"room2", message:"hello everyone i am client3" });
});

//listen for chat message 
socket.on("chatMessage", (data) => {
  console.log("Received message:", data.text, "from:", data.from);
});
