let login = prompt("Please login with your designation", "");
let password;
alert(login);
if(login == "Admin"){
    password = prompt("please enter your password", "");
    
    if(password == "TheMaster"){
        alert("Welcome");
    }
    else if(password == ''||password ==null){
        alert("Canceled");
    }
        else{
            alert("Wrong Passwor");
        }
    
}
else if(login == (''||null)){
    alert("Canceled");
}
else{
    alert("I don't know you");
}