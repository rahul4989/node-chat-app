var socket = io();

socket.on('connect',()=>{
    console.log('Connected to server');

    socket.emit('createMessage',{
        from:'rahul',
        text:'hey'
    })
});

socket.on('disconnect',()=>{
    console.log('user was disconnected');
})

socket.on('newMessage', function(message)=>{
    console.log('newMessage',message)
})