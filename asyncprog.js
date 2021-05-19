// function hello() { return "Hello!" };

// console.log(hello());

// async function hello() { return "hello!" };

// // console.log(hello());
// // await

// hello().then((sachin) => console.log(sachin));

// API Integration
// API --> 

// To find Movie Deatils

var movieName = prompt("Enter the movie name: ");

async function getMovieDetails(movieName) {
    var response = await callApi(movieName);
    console.log(response);
    document.write(response.Plot)
}

async function callApi(movieName) {
    var url = 'https://www.omdbapi.com/?apikey=51b33037&t=' + movieName;
    const response = await fetch(url)
    var data = await response.json();
    // console.log(data)
    return data
}

getMovieDetails(movieName);
// console.log(data)