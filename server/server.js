const path = require('path');
const express= require('express');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');
var app = express();
app.use(express.static(publicPath));

var server = http.createServer(app);
var io= socketIO(server);
io.on('connection', (socket)=>{
    console.log('new user connected');
})

socket.emit('newMessage',{
    from:'mike@gmail.com',
    text:'hey',
    createAt:123
})

socket.on('createMessage',(message)=>{
    console.log('createMessage',message);
})
socket.on('disconnect',()=>{
    console.log('disconnected')
})
server.listen(port,()=>{
    console.log(`server on ${port}`);
})