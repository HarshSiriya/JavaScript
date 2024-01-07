console.log('Array Methods');

// reverse
let arr = ['a', 'b', 'c', 'd', 'e'];
let reverse = arr.reverse();
console.log(reverse);
console.log(arr);  // also changed because mutating method

// concatinate
let nums = [1,2,3,4,5];
let concat = nums.concat(arr);
console.log(concat);
console.log(nums);    //orignal dosent change (non-mutating method)

// join

let join = arr.join(' ');   // seperator is given as argument
console.log(join);

// slice
let num1 = [1,2,3,4,5,6,7,8,9];
let extracted = num1.slice(1,4);  // last term is excluded (1-3) , negative index is also allowed
console.log(extracted);

// splice (mutating method)

let num2 = [2,3,4,5,6,7,8,9];
let sp = num2.splice(1,1,1);  // arguments : (index, numberOfValuesToBeDeleted , valueToBeAdded)
console.log(num2);
console.log(sp);  // deleted value is stored in this array

let sp1 = num2.splice(2,0,1,4);   // no delete but 2 values are added
console.log(num2);

// map 

let salaries = [3000,5000,6000,7000,9000];
let newSalaries = salaries.map(salary =>{
    let increment = salary/2;
    return salary + increment;
})

console.log(newSalaries);

// filter

let gifts = ['watch','chocolate', 'teddy', 'panda', 'car', 'watch'];
let filteredArray = gifts.filter(gift =>{
    if(gift == 'watch'){
        return gift;
    }
})

console.log(filteredArray);

// reduce

let num3 = [1,2,3,4,5,6];
let reduced = num3.reduce((total, currentValue)=>{
    return total + currentValue;
},0)
console.log(reduced)

// find

let arr1 = [{id:1, name:'harsh'}, {id:2, name:'karan'}];  // uses in complx arrays
let result = arr1.find(stu =>{
    return stu.id ===1;
})
console.log(result);   // returns object

// findIndex Method

let num4 = [22,33,44,55,66];
let r1 = num4.findIndex(age=>{
    return age>30;
})
console.log(r1);

// some and every method

let score = [25,35,45,55,65,75];
let r2 = score.some(score=>{
    return score > 55;     
})
console.log(r2);         // returns true when some or at least one condition is met 

let r3 = score.every(sc =>{
    return sc > 55;       // return true only if every conditions are met 
})
console.log(r3);

// flat

let max = [[1,2,3] , [2,4,6], [3,6,9]];
console.log(max.flat());

let max1 = [[1,2,[3,4]], [3,4,[5,6]]];
console.log(max1.flat(2));

// sorting Array

let arr2 = ['a', 'e', 'f', 'b', 'd', 'c'];
console.log(arr2.sort());

let num5 =[1,56,30,-22,-49,-1];
num5.sort((a,b) =>{
    return a-b;
})
console.log(num5);