document.write("Hello all!<br>")


// const job = {
//     position: "cashier",
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? "is accepting applications" : "is not currently accepting applications";
//         document.write(`The ${this.position} position is ${this.type} and ${accepting}<br>`)
//     }
// }

// document.write(job.position);
// job.position = "Technical Trainer";
// document.write("<br>")
// document.write(job.position);




// let ob1 = Object.create(job)
// let ob2 = Object.create(job)

// ob1.showDetails()
// ob1.position = "Technical Trainer";
// ob1.showDetails()

// ob2.showDetails()

// ob1.isAvailable = false;

// ob1.showDetails();

// ob2.showDetails();
// let data = ['sachin', 'saini', 'eddy'];
// document.write(data.length);
//[ "boss", "secretary", "sales", "accountant" ].forEach =
// key=boss

// const employees = {
//     boss: "Michael",
//     secretary: "Den",
//     sales: "Jim",
//     accountant: "Oscar"
// }


// console.log(Object.values(employees));


// console.log(Object.keys(employees).length);
// Object.keys(employees).forEach(key => {
//     let value = employees[key];
//     document.write(`${key}: ${value}<br>`);
// })

// python --> .key(), item()
// let keys = Object.keys(employees);
// document.write(keys);
// console.log(keys);


// entries ---> nested array
// [['name, 'ubuntu],
// ['version', 20.04],[]]

const operatingsystem = {
    name: "Ubuntu",
    version: 20.04,
    license: "Open Source",
}

const employees = {
    boss: "Michael",
    secretary: "Den",
    sales: "Jim",
    accountant: "Oscar"
}

// let sachin = Object.assign(operatingsystem, employees);

let entries = Object.entries(operatingsystem);
console.log(entries);
//item = [version ,20.4]

entries.forEach(item => {
    let key = item[0];
    let value = item[1];
    document.write(`${key} = ${value}<br>`);
});

// let data = ["python", "jenkins", "terraform"];

// data.forEach(course => {
//     console.log(course);
// })