var database = {
    eddygrant000: {
        name: "Sachin Saini",
        age: 22,
        email: "eddygrant000@gmail.com",
        password: 'red@123',
        balance: 50000,
    },
    reshma123: {
        name: "Reshma JS",
        age: 22,
        email: 'reshma@yahoo.com',
        password: 'abc',
        balance: 300000,
    }
}

// username, 'eddygrant@gmail.com', accountnumber
// networking --> username
// in : memership

function login(user, passwd) {
    if (user in database) {
        if (passwd == database[user].password) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function register(username) {
    if (username in database) {
        document.getElementById("result").innerText = "Username is Already Taken!";
    } else {
        database[username] = {
            name: prompt("Enter Full Name: "),
            age: parseInt(prompt("Enter the Age: ")),
            email: prompt("Enter email: "),
            password: prompt("Enter the password: "),
        }
    }
}

function event1() {
    var userchoice1 = document.getElementById("userchoice1").value;
    console.log(userchoice1)
    if (userchoice1 == "1" || userchoice1.toLowerCase() == "login") {
        // alert("Login body")
        var user_username = prompt("Enter Username: "); // eddygrant000 // reshma123 // sandeep
        var user_password = prompt("Enter password: "); // red@123     // 123       // abc
        if (login(user_username, user_password)) {
            document.getElementById("result").innerText = "Welcome " + database[user_username].name + " Authentication Success!";
        } else {
            document.getElementById("result").innerText = "Username or Password is wrong!";
            var userchoice2 = prompt("Do you want to reset password[yes/no]: ");
            if (userchoice2 == "yes") {
                user_email = prompt("Enter your email: ");
                if (user_email == database[user_username].email) {
                    database[user_username].password = prompt("Enter new password: ");
                } else {
                    alert("Email was Wrong!");
                }
            } else {
                alert("Ok! Try Again!!");
            }
        }
    } else if (userchoice1 == "2" || userchoice1.toLowerCase() == "register") {
        var new_username = prompt("Enter Username: ");
        register(new_username);
    } else {
        document.getElementById("result").innerText = "Invalid Input try Again!!";
    }
}


// withdrawl 
// deposit
// View balance