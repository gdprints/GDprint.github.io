function login(){
	var username = 'tmjU897HUyeb';
	var password = 'tmjM99mHUyeb';
	
	var userName = document.getElementById('username').value; 
	var passWord = document.getElementById('password').value; 
	
	if((username == userName) && (password == passWord)){
		window.location.assign("tmjU9YmHUyebtmjU9YmHUyeb.html");
		
	}else{
		alert("Դուք հասել եք անվճար օգտագործման փաթեթին կատարեք վճարում ծառայությունից օգտվելու համար հարգանքներով GDprinting ընկերություն։");
		return;
	}
}
