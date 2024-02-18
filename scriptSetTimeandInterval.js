// // JavaScript Code setTimeout and setInterval

// console.log("Hi");
// console.log("Hello");
// setTimeout(function () {
//     console.log("Hello SetTimeout");
// }, 3000)
// console.log("Bye");
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// // CountDown and Timer and Interval and Timeout and SetInterval and SetTimeout
 var countDown = 10;

var interval = setInterval(function () {
    console.log(countDown--);
    if (countDown === 0) {
        clearInterval(interval);
    }
    document.getElementById("counter").innerHTML = countDown
}, 1000)


// function getData(callback) {
//     setTimeout(function () {
//         callback('Data Fetched');
//     },1000);
// }

// getData(mycallback)

// function mycallback(data) {
//     console.log(data)
// }

// console.log(window)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       console.log("response");