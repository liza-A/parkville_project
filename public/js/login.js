// accessing the dom by form name and element
const Email = document.entryForm.email;
const Password = document.entryForm.password;

//displaying errors picked from id of error element in form
const emailError = document.getElementById('lemail');
const passwordError = document.getElementById('lpassword');

//event listners got from declared constants
Email.addEventListener('blur', Email_verify, true);
Password.addEventListener('blur', Password_verify, true);

//validations
function validate(){
    //username validation, checking if its empty
    if(Email.value ===''){
        emailError.textContent = 'Email is required';
        Email.focus();
        return false;
    }
    //password validation
    if(Password.value ===''){
        passwordError.textContent = 'Password is required';
        Password.focus();
        return false;
    } 
}

//regex
// const nameRegex = /^.{2,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
// const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
// const ninRegex = /^[0-9a-zA-Z]{14}$/; // for NIN exactly 14 alphanumric characters
// const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'

//event handlers for correct data

//Email
 function Email_verify(){
     if(Email.value !='' && Email.value.match(emailRegex)){
         emailError.innerHTML = '';
         return true;
     }
     else{
        //Error.textContent = 'Username should be between 2-20 alphabetic characters '
        Email.focus();
        return false;
        }
 }

//password
 function Password_verify(){
     if(Password.value !='' && Password.value.match(passwordRegex)){
         passwordError.innerHTML = '';
         return true;
     }
     else{
        passwordError.textContent = 'Minimum eight characters, at least one letter and one number'
        Password.focus();
        return false;
        }
 }