// Logical Operator & Ternary Operators

//  ||  : or 

//  &&  : and

//  !   : not 
//  ----------------
// 
// alert(true || true || true) // true
// document.write(false || false || true) // true
// document.write(false || false || false) // false


// &&  : and

// let result = (true && true && true)

// document.write(result)

// let hour = 7;
// //   7 < 10|| 12 > 18
// //   true  || false ---> true

// if (hour < 10 || hour > 18) {
//     document.write("The office is closed")
// }

// let age = parseInt(prompt("Enter your age: ")); // 32
// // age == number 
// // age > 18
// // console.log(typeof(age))
// // 32 > 18  && 32 < 30
// //  true    &&   false  = false
// // 
// if (age > 18 && age < 30) {
//     document.write("You are elegible vor vote!")
// }

// ! : not 
//  ? 


// variable =  (condition) ? value1 : value2

// let age = 32;

// var result = (age < 18) ? "Too Young" : "Old Enough";
//            32 > 18 - F              15 < 30
// var result = (age > 18) ? "State1" : (age < 30) ? "State2" : "State3";

// let result = ""
// if (age > 18) {
//     result = "State1"
// } else if (age < 30) {
//     result = "State2"
// } else {
//     result = "State3"
// }

// document.write(result);


// Function --> 

var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var session = (hours > 12) ? "PM" : "AM";

hours = hours > 12 ? hours - 12 : hours;

hours = (hours < 10 ? "0" : "") + hours;
minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "") + seconds;

var time = hours + ":" + minutes + ":" + seconds + " " + session;
document.write(time);
// console.log(time)
// 10:
// 10 < 10

https: //quizizz.com/join?gc=097118