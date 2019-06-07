 var buttonclick = document.getElementById('create-chat-button');
 var chatinfo = document.getElementById('chat-text-input');
 var chatauto = document.getElementById('chat-attribution-input');

 
 buttonclick.addEventListener('click',function(){
	 var back = document.getElementById('modal-backdrop');
	 var back2 = document.getElementById('create-chat-modal');
	 
	 back.classList.toggle('hidden');
	 back2.classList.toggle('hidden');
	 
 });
 
 var cancelButton = document.getElementsByClassName('modal-cancel-button');
 var closeButton = document.getElementsByClassName('modal-close-button');
 
 cancelButton[0].addEventListener('click',closewindow);
 closeButton[0].addEventListener('click',closewindow);
 
 function closewindow(){
	 var back = document.getElementById('modal-backdrop');
	 var back2 = document.getElementById('create-chat-modal');

	 
	chatinfo.value = '';
	chatauto.value = '';
	 
	 back.classList.toggle('hidden');
	 back2.classList.toggle('hidden');
 };
 
var createchat = document.getElementsByClassName('modal-accept-button');
	
	createchat[0].addEventListener('click',function(){
		if(chatinfo.value == '' || chatauto.value == ''){
			alert("PLEASE FILL IN BOTH INPUT FIELDS");
			return;
		}
	
	**********************************************************************
	**********************************************************************
	*******************add your handlebar stuff here**********************
	**********************************************************************
	**********************************************************************
	
		
		
		
	});