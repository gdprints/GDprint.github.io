function login(){
	var username = 'goldadmin';
	var password = 'tmjU9YmHUyeb';
	
	var userName = document.getElementById('username').value; 
	var passWord = document.getElementById('password').value; 
	
	if((username == userName) && (password == passWord)){
		window.location.assign("tmjU9YmHUyebtmjU9YmHUyeb.html");
		alert("բարի գալուստ");
	}else{
		
		alert("ERROR");
		return;
	}
}