var roomName = {{ room_name_json }};

var chatSocket = new WebSocket(
    'ws://' + window.location.host +
    '/ws/game/' + roomName + '/');

chatSocket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    console.log(data)
    if (data.length == 1) {
        var username = data['username'];
        document.querySelector('#chat-log').value += (username + + 'rang' + 'poop\n');
    }
    else {
        var username = data['username'];
        var message = data['message'];
        document.querySelector('#chat-log').value += (username + message + + 'gang'+ 'roop\n');
    }
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').focus();
document.querySelector('#chat-message-input').onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#chat-message-submit').click();
    }
};

document.querySelector('#chat-message-submit').onclick = function(e) {
    var messageInputDom = document.querySelector('#chat-message-input');
    var message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));

    messageInputDom.value = '';
};