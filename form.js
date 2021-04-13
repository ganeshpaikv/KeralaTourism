let email = document.getElementById("InputEmail");
let pwd = document.getElementById("InputPassword");
let cpwd = document.getElementById("cInputPassword");
let mobile = document.getElementById("InputMobile");

let emailerr = document.getElementById("emailerror");
let pwderr = document.getElementById("pwderror");
let moberr = document.getElementById("moberror");

	
		
		 let emailregex = /^([a-zA-Z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})$/;
		 let pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
		 let mobregex =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

		 function validate() { 

			 if(!emailregex.test(email.value)) 
			 {
		    emailerr.innerHTML = "Email format is Invalid.";
			emailerr.style.color = "red";
			document.getElementById("InputEmail").style.border = "solid 3px red";
			return false;
			}
				    
			else if(!pwdregex.test(pwd.value)) {
				pwderror.innerHTML = "password format is Invalid.";
				pwderror.style.color = "red";
				document.getElementById("InputPassword").style.border = "solid 3px red";
				return false;
				
			} 
			else if(!mobregex.test(mobile.value)) {
				moberror.innerHTML = "Mobile number format is Invalid.";
				moberror.style.color = "red";
				document.getElementById("InputMobile").style.border = "solid 3px red";
				return false;

			} 
	        else{

			return true;
	}
	}
	