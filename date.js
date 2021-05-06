// let para1 = document.getElementById("para1");

// para1.innerText = "<h3>Hi there! This JS session By SkillSanta.</h3>";
// para1.innerHTML = "<h3> &lt;h2&gt; Hi there!          This JS session By SkillSanta.</h3>";
// &

// console.log(para1)
// let a = 10
// a = 20
// console.log(a)

// Date --> 

// Create -->

// function hello() {
//     console.log("Call from Hello Func");
// }
// new --> 
// new --> 

// let d1 = new Date(year, month, date, hour, minut, second, milli);
// let d1 = new Date(2020, 6, 10, 11, 10, 5, 0);
// // Date
// console.log(d1);
// // console.log(typeof d1);
// // d1.setHours(10);
// console.log(d1.getHours());
// console.log(d1.getMinutes());
// hourse: min: second : am/pm


function clock() {
    let d1 = new Date();
    let hours = d1.getHours();
    let minutes = d1.getMinutes();
    let seconds = d1.getSeconds();
    let period = "AM";

    if (hours == 0) {
        hours = 12;
    }
    // 23 --> 12:00:00 AM

    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    }


    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;


    let result = `${hours}:${minutes}:${seconds} ${period}`;

    document.getElementById("para1").innerText = result;

}

// 05:05:03
// clock();
// console.log("hello by sachin!");
// setTimeout(clock, 5000);

setInterval(clock, 1000);

// clearInterval()