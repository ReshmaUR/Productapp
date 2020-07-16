function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexp1 = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]{3,}$/; 
    var regexp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,}$/;
    var regexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#_$%^&*-])[a-zA-Z0-9@!#_$%^&*-]{8,}$/;
    if(regexp.test(email)){
        document.getElementById("error").innerHTML = "";
        document.getElementById("email").style.border = "2px solid #2ecc71";
          
            if(regexp1.test(password)){
                document.getElementById("error_pass").innerHTML = "Password is weak, include number and special character too";
                document.getElementById("error_pass").style.color = "orange";
                document.getElementById("password").style.border = "2px solid orange";
                return false;
             }

            if(regexp2.test(password)){
                document.getElementById("error_pass").innerHTML = "Looking good!!! include a special character...";
                document.getElementById("error_pass").style.color = "yellow";
                document.getElementById("password").style.border = "2px solid yellow";
                return false;
            }
            if(regexp3.test(password)){
                document.getElementById("error_pass").innerHTML = "Strong password";
                document.getElementById("error_pass").style.color = "green";
                document.getElementById("password").style.border = "2px solid #2ecc71";
                return true;
            }
            else{
                document.getElementById("error_pass").innerHTML = "Password should contain minimum 8 characters including uppercase and lowercase letters,numbers and special character";
                document.getElementById("error_pass").style.color = "red";
                document.getElementById("password").style.border = "2px solid red";
                return false;
                }
        
    }
        else{
        document.getElementById("error").innerHTML = "Invalid email id";
        document.getElementById("error").style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    }
}