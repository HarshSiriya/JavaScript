console.log('Object Oriented');

let Car = function(color, model){
    this.color = color;      // color and model is a property not parameter
    this.model = model;
}
let result = new Car('black', 2022);     // function working as a object is known as constructor function
console.log(result);

Car.prototype.startEngine = function(){
    console.log('Engine is started');
}
result.startEngine();

// Class
class Car1{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    StartEngine1(){
        console.log('Car1 Engine is satrted');
    }

    get engine(){
        console.log('Engine');
    }

    set color1(color1){
        this.color = color1;
    }
}

let instance = new Car1('pink', 2021);
console.log(instance)
instance.engine;
instance.color1 = "blue";
console.log(instance)

// Inheritance

class Bike extends Car1{
    constructor(color, model, torque){
        super(color,model);
        this.torque = torque;
    }
}
let newBike = new Bike('black', 2023, 225);
console.log(newBike);