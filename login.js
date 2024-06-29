function login(){
	var username = 'GDprint999';
	var password = 'GDprint1599';
	
	var userName = document.getElementById('username').value; 
	var passWord = document.getElementById('password').value; 
	
	if((username == userName) && (password == passWord)){
		window.location.assign("tmjU9YmHUyebtmjU9YmHUyeb.html");
		
	}else{
		alert("Ծառայությունը հասանելի է GOLD փաթեթի հաճախորդններին հարգանքներով GDprinting ընկերություն։");
		return;
	}
}
