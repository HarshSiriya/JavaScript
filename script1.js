console.log("Hello coders");

x=5;
var y = 3;
let z = 6;
const c= 1;

console.log(x);
console.log(y);
console.log(z);
console.log(c);

let firstname = "Harsh";
let lastname = "Siriya";
console.log(firstname, lastname);

// concatinate

// method 1
let fullname = firstname + " "+ lastname;
console.log(fullname);

// method 2
let fullname1 = `I am ${firstname} ${lastname}`;
console.log(fullname1)

console.log(fullname[0]); 


console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

console.log(fullname.indexOf("y"));

let hobbies = "     Harsh is a good boy    ";
let result = hobbies.trim();
console.log(hobbies)
console.log(result);

console.log(hobbies.lastIndexOf("boy"));
console.log(result.includes("Harsh"));

let myname = "wowprogrammer";
console.log(myname)
console.log(myname.slice(0,5));

let favColors = "Brown Pink Red Green Blue Black";
let arrColor = favColors.split(" ");
console.log(arrColor)


let str = "hello";
str = str + "world";
console.log(str);

let score = 17;
let result1 = score/3;
console.log(result1);

let no1 = score * 2 + (4*3) - 8/2 % 4;
console.log(no1);

let n1= 22;
console.log(n1 == "22");
console.log(n1 === "22");

// type conversions
let strintype = "54";
console.log(strintype, typeof strintype);

let numbertype = Number(strintype);
console.log(numbertype, typeof numbertype);

let string1 = "Harsh";
let num1 = Number(string1);
console.log(num1);

let num2 = 54;
let string2 = String(num2);
console.log(string2, typeof string2);

let age = 22;
let bool = Boolean(age);
console.log(bool);   // true

let age1 = "22";
let bool1 = Boolean(age1);
console.log(bool1);    // true

let age2 = "";
let bool2 = Boolean(age2);
console.log(bool2);   // false

let age3 = 0;
let bool3 = Boolean(age3);
console.log(bool3);   // false

let age4 = " ";
let bool4 = Boolean(age4);
console.log(bool4);   // true

// array
let dishes = ["biryani", "Chat", "Parathey"];
console.log(dishes[0]);

dishes[1] = "Samosa";
console.log(dishes)

console.log(dishes.join(" "));  // " " this is a seperator

console.log(dishes.indexOf("Samosa"));

let newdishes = ["Kajukatli", "Rasgulla"];
console.log(dishes.concat(newdishes));

console.log(dishes.length);
console.log(dishes.push("Pullav"));
console.log(dishes.pop());

