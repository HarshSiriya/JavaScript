function harsh(){
    console.log("Harshu");
}

harsh();
harsh();

let fun = function(){
    console.log("Anonymous function");
}
fun();

let invite = function(name){
    console.log(`you are welcome ${name}`);

}
invite("Harsh");

let agecal = function(birthyear , currentyear = 2023){
    let age = currentyear - birthyear;
    return age;  // return age
}
console.log(agecal(2002));


let invitation = name => `Welcome ${name} to this Event`;
console.log(invitation("Coders"));

let uppercase = function(str){
    return str.toUpperCase();
}
let lowercase = function(str){
    return str.toLowerCase();
}
let transform = function(str, fun){
    return fun(str);
}
console.log(transform("hello", uppercase));

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
}
console.log(compliment("Coder") ("Harsh"));

function greetings(){
    console.log("Welcome");
}
setTimeout(greetings, 5000);
// setInterval(greetings, 3000);