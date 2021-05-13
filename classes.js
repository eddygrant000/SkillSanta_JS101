// classes are functions 

// const a = class {};

// const ob1 = new a();

// console.log(ob1);

// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// class Helo{
//     constructor() {...}
//     method1() {...}
//     method2() {...}
//     method3() {...}
//     method4() {...}
// }


// class Skillsanta {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     view() {
//         return `Hi this is my name ${this.name} and age is ${this.age}`
//     }
// }


// st1 = new Skillsanta("Adarsha", 24);
// st2 = new Skillsanta("Sandeep", 20);

// console.log(st1.view());

// console.log(st2.view());
// class ---> temp, blue print --> create object 
// // --
// class Skillsanta {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     update(value) {
//         this._name = value;
//     }
// }

// st1 = new Skillsanta("Damini", 20);

// console.log(st1);
// st1.update("Priya");
// console.log(st1);

// st1._name = "Ritika";

// console.log(st1);


class Car {
    constructor(carname) {
        this.carname = carname;
    }
    view() {
        return `I have a ${this.carname}`;
    }
}

class Model extends Car {
    constructor(carname, mod) {
        super(carname)
        this.model = mod
    }
    details() {
        return this.view() + ', it is a ' + this.model;
    }
}


c2 = new Model("Jeep", "Rubicon");
console.log(c2.details());
console.log(c2.view());

// c1 = new Car("GT");
// console.log(c1.view());

//'use strict';

// var hello = function(){
//     'use strict';
//     var publicmem = {};

//     // private method
//     var h1 = function(x){
//         alert(x);
//     }

//     // a public method
//     publicmem.publicmethod =  function(z){
//         alert(z)
//     }
//     return publicmem;
// }