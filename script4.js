let car = {
    color: "Black",
    model : "2022",
    company: "Tata"
}
console.log(car)
console.log(car.model);

let obj = {
    prop1 : "Value1", 
    prop2 : "Value2"
};
delete obj.prop1;
console.log(obj);

delete obj["prop2"];
console.log(obj);


let person = {
    firstname : "Harsh",
    lastname : "Siriya",
    city : "Nagpur",
    birthyear : 2002,
    education : "B.Tech",
    getSummary : function(){
        return `${this.firstname} ${this.lastname} is a person . He lives in ${this.city} and his DOB is ${this.birthyear} . His Education is ${this.education}`;
    }
}
console.log(person.getSummary());

let dishes = ["Biryani", "Samosa", "Parathay"];
dishes.forEach(function(element){
    console.log(element);
})

let blockList = [{
    username : "Harsh", 
    reason : "Misbehave",
},{
    username : "Karan",
    reason : "Copyright Issues"
}]

console.log(blockList);
for(let i = 0; i<blockList.length; i++){
    console.log(blockList[i].username , blockList[i].reason);
}


let mainplain = {
    airline : "Fly india", 
    itcode : "Fi",
    bookings : [],
    book : function(flightnum , name){
        console.log(`${name} booked flight on ${this.airline} with flight number ${flightnum}`);


        this.bookings.push({flight : `${this.airline}`, name: name});
    }
}
mainplain.book(555, "Harsh");
// new airline launched of same group

let childplain = {
    airline: "child plain",
    itcode: "cp",
    bookings : []
}
let book = mainplain.book;
book.call(childplain, 689, "Zack");


// bind method 
function greet(){
    console.log(`Welcome ${this.fname} ${this.lnmae}`);
}
let user = {
    fname : "Harsh", 
    lnmae: "Siriya"
}
let greets = greet.bind(user);
greets();

let array1 = [1,2,3,4,5];
let getref = array1;
getref[5] = 7;  // orignal array is also changing
getref.shift();
console.log("Original Array : " , array1);
console.log("refrence Array : " , getref);

// spread 
let getvalue = [...array1];
getvalue[5]=7;
getvalue.shift();
console.log("orignal Array : " , array1);
console.log("Getvalue array : ", getvalue);


//for in loop
let car1 = {
    model : 2022,
    comapny : "Toyota",
    name : "Fortuner"
}
console.log(car);

for(let x in car1){
    console.log(x);   // will get keys of the object in x 
    console.log(car1[x]);  // this is how we will get values out of keys
}