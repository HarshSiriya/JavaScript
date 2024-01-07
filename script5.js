
let result = document.querySelector('p');
console.log(result);

let resultAll = document.querySelectorAll('p');
console.log(resultAll);

resultAll.forEach(element =>{
    console.log(element);
});


let queryclass = document.querySelector('.coder');
console.log(queryclass);

let queryId = document.querySelector('#id1');
console.log(queryId);

let tagName = document.getElementsByTagName('p');
console.log(tagName); // returns html collections

let className = document.getElementsByClassName('coder');
console.log(className);
 
let heading = document.querySelector('h1');

// innerText
console.log(heading.innerText);

let content = document.querySelector('.content')
content.innerText = "<p> Text Changed with innerText</p>";

// innerHTML
console.log(heading.innerHTML);

content.innerHTML = "<p> Text Changed with innerHTML</p>";


let github = document.querySelector('a');
console.log(github);
console.log(github.getAttribute('href')); //reading values of attributes href

github.setAttribute('href', "https://www.linkedin.com/mynetwork/");

github.innerText = "New Github Link";

let heading1 = document.querySelector('h1');
heading1.style.color = "Red";

let hhh1 = document.querySelector('h1');
hhh1.classList.add('newClass'); // add a class named as newClass to heading tag

hhh1.classList.remove('newClass');  //remove class from heading tag

hhh1.classList.replace("class2", "newClass"); // replace class2 with newClass using replace function

let parentElement = document.querySelector('.parent');
console.log(parentElement);
console.log(parentElement.children);  // returns html collection so we cannot access elements
console.log(Array.from(parentElement.children)); // this will convert html collections into array so we can access it

Array.from(parentElement.children).forEach(function(element1){
    element1.classList.add("coders");
})   // Accessing child and modifing it


let childElement = document.querySelector('h3');
console.log(childElement.parentElement);  // access parent from child
console.log(childElement.previousElementSibling);  // accessing pervious sibling from child

const ul1 = document.querySelector('ul');

let eventElement = document.querySelector('.clickMe');
eventElement.addEventListener('click', function(){
    console.log("Someone Click Me");
})

eventElement.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = "Something Added";
    ul1.append(li);
})


let element3 = document.querySelectorAll('li');
element3.forEach(function(ele1){
    ele1.addEventListener('click', function(e){
        e.target.style.color = "Red";   // change color of li 
    })
})

element3.forEach(function(ele1){
    ele1.addEventListener('click', function(e){
        //e.target.remove();            // remove li
    })
})

// let copyRightElement = document.querySelectorAll('.copy');
// copyRightElement.addEventListener('copy', function(){
//     console.log("Copy Right Element Please do not copy");
// })

let dot1 = document.querySelector('.dot');
dot1.addEventListener('mousemove', (e)=>{
    console.log(e.offsetX, e.offfsetY);
})

