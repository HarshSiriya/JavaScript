let form = document.querySelector('.sign-up-form');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log("Login Credentials : ", email.value , password.value);
    console.log("Login Credentials : ", form.userEmail.value, form.userPassword.value);
    // accessing directly by name of input of form
})
let username = document.querySelector('#username');

// this is a REGEX for 
// At least one capital letter
// At least one small letter
// at least one digit between zero to nine
// at least 8 digit in length
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";
let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let passwordValue = form.userPassword.value;
    let result = passwordValue.match(passwordPattern);
    console.log(result);
    if (result) {
        console.log("Your password is strong");
    }
    else {
        console.log("Try again");
    }

    let result1 = userNamePattern.test(username);
    if (result1 == true) {
        console.log('valid username');
    }
    else {
        console.log('invalid username');
    }
})


username.addEventListener('keyup', (e) =>{
    if(userNamePattern.test(e.target.value)){
        username.setAttribute('class', 'success');
    }else{
        username.setAttribute('class', 'fail');
    }
})


