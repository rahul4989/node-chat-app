var socket = io();

socket.on('connect',()=>{
    console.log('Connected to server');

});

socket.on('disconnect',()=>{
    console.log('user was disconnected');
})

socket.on('newMessage', function(message){
    console.log('newMessage',message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
})

$('.name').on('submit',function(e){
    e.preventDefault();
socket.emit('createUser',{
    from:$('[name=name]').val(),
})
})

$('#message-form').on('submit',function(e){
    e.preventDefault();


    socket.emit('createMessage',{
        from:$('[name=name]').val(),
        text:$('[name=message]').val()

    },function(){

    })
    document.getElementById("message-form").reset();
})


