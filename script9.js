console.log('Local Storage');

console.log(window.localStorage);

// Set Data in Local Storage
localStorage.setItem('name', 'Harsh');
localStorage.setItem('age', 21);    // age is set
console.log(localStorage);


// get data from local storage
console.log(localStorage.getItem('name'));


// Remove from local storage 
localStorage.removeItem('age');  // age is removed

// Set complex data structure in local storage  (in string format)
let vehicles = [
    {'company':'Toyota', 'model':'supra'},
    {'company':'Honda', 'model':'civic'}
]
let StringContent = JSON.stringify(vehicles);
localStorage.setItem('vehicle',StringContent);
console.log(localStorage);

// get complex data structure from local storage (in JSON format)

let stored = localStorage.getItem('vehicle');
let objFormat = JSON.parse(stored);
console.log(objFormat);

