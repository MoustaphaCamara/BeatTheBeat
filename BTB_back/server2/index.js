const express = require('express')
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
const { log } = require('console')


app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
  console.log(`${socket.id} is connected`);
  socket.on("send_message", (data)=>{
    socket.broadcast.emit("receive_message", data)
  })
})

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log("SERVER IS RUNNING");
})