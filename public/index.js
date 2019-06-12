var buttonclick = document.getElementById('create-chat-button');
var chatinfo = document.getElementById('chat-text-input');
var chatauto = document.getElementById('chat-attribution-input');

var cancelButton = document.getElementsByClassName('modal-cancel-button')[0];
var closeButton = document.getElementsByClassName('modal-close-button')[0];

cancelButton.addEventListener('click',closewindow);
closeButton.addEventListener('click',closewindow);

function closewindow(){
 var back = document.getElementById('modal-backdrop');
 var back2 = document.getElementById('create-chat-modal');


chatinfo.value = '';
chatauto.value = '';

 back.classList.toggle('hidden');
 back2.classList.toggle('hidden');
};

var createchat = document.getElementsByClassName('modal-accept-button')[0];

buttonclick.addEventListener('click',function(){
 var back = document.getElementById('modal-backdrop');
 var back2 = document.getElementById('create-chat-modal');

 back.classList.toggle('hidden');
 back2.classList.toggle('hidden');
});

createchat.addEventListener('click',function(){
	if(chatinfo.value == '' || chatauto.value == ''){
		alert("PLEASE FILL IN BOTH INPUT FIELDS");
		return;
	}

  var request = new XMLHttpRequest();
  var url = '/users/' + window.location.pathname.split('/')[1] + '/addChat';
  request.open('POST', url);

  request.addEventListener('load', function (event) {
    if (event.target.status === 200) {
      var homeChatTemplate = Handlebars.templates.homeChat;
      var newHomeChatHTML = homeChatTemplate({
        name: chatinfo.value,
        author: chatauto.value
      });
      var homeChatContainer = document.querySelector('.container');
      homeChatContainer.insertAdjacentHTML('beforeend', newHomeChatHTML);
    } else {
      var message = event.target.response;
      alert("Error storing photo on server: " + message);
    }
  });

  request.setRequestHeader('Content-Type', 'application/json');
  request.send(requestBody);

});

var minicreatechat = document.getElementsByClassName('minimodal-accept-button')[0];

minicreatechat.addEventListener('click',function(){
	if(chatinfo.value == ''){
		alert("CHAT FIELD CANNOT BE EMPTY");
		return;
	}

  var request = new XMLHttpRequest();
  var url = '/users/' + window.location.pathname.split('/')[1] + '/chat/' + window.location.pathname.split('/')[3] + '/addChat';
  console.log(url);
  request.open('POST', url);

  request.addEventListener('load', function (event) {
    if (event.target.status === 200) {
      var chatTemplate = Handlebars.templates.homeChat;
      var newChatHTML = chatTemplate({
        name: chatinfo.value,
        author: window.location.pathname.split('/')[1]
      });
      var chatContainer = document.querySelector('.chat-container');
      chatContainer.insertAdjacentHTML('beforeend', newChatHTML);
    } else {
      var message = event.target.response;
      alert("Error storing photo on server: " + message);
    }
  });

  request.setRequestHeader('Content-Type', 'application/json');
  request.send(requestBody);

});
