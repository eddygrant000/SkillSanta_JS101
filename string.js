// String Manipulation ---> 
// forgot password --> 
// *********42
// 
// edd*********@gmail.com -->

// console.log("hi my name is\neddy grant")
// document.write("hi my name is<br> eddy grant")


// let str1 = 'Skillsanta1';
// let str2 = "Skillsanta2";

// let str3 = `Skillsanta3`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// let state1 = "eddy's have \"fujistu\" laptop";
// console.log(state1)

// let first_name = prompt("Enter firstname: ");
// let last_name = prompt("Enter Lastname: ");

// document.write("My first name is", first_name, "and my lastname is", last_name);
// document.write("My first name is" + first_name + "and my lastname is" + last_name);
// let result = `My first name is ${first_name} and my lastname is ${last_name}`;
// document.write(result);
// document.write(`My first name is ${first_name} and my lastname is ${last_name}`)

// let data1 = prompt("Enter a string: ")

// document.write(data1.length);

// sliceing 
// Indexing --> 
//                        ....-3-2-1
//      slice(start_index) ----> 
//      slice(start_index, end_index) ----> 

//              Ankita, Anil, Dipti
//              0123456789111213......
//                kita, 
// let names = "Ankita, Anil, Dipti, anil, ankita, anil";

// document.write(names);
// document.write("<br>");

// == 
// === 


// anil ---> sachin
// g-global --> replace all match
// i -> incase senstive
// document.write(names.replace(/A/gi, 'B'));

// Regular Expression --> [], {}, ?, (|), a-z, 0-, ^ $
// document.write(names.replace(/anil/gi, 'sachin'));
// document.write(names.replace(/anil/g, 'sachin'));
// document.write(names.replace('anil', 'sachin'));

// document.write(names.toLowerCase());
// document.write(names.toUpperCase());
// document.write(names.indexOf("n", 2));

// // document.write(names.slice(1, 5));
// document.write(names.substring(2, 5));
// document.write("<br>");
// document.write(names.substr(2, 7));

// document.write(names.charAt(names.length - 1));
// document.write(names[6]);

// console.log(names.length);
//

// let string = "Hy my name is Eddy Grant and nick name is eddy Grant";


// let sachin = string.replace(/name|eddy|grant/gi, function(x) {
//     return x.toUpperCase();
// })
// document.write(string);
// document.write("<br>");
// document.write(sachin);
// let data1 = "      hi from Skillsanta           ";
// console.log(data1);
// console.log(data1.trim());
// let names = "Ankita, Anil, Dipti, anil, ankita, anil";

// console.log(names.split(" "));

// https://quizizz.com/join?gc=823736