var arr = ["apple", "banana", "cherry", "orange", "kiwi", "banana", "mango", "orange", "cherry", "apple", "banana"];

var arr1 = [];

arr.forEach(function (value) {
    
    console.log(value);
    if (!arr1.includes(value)) {
        arr1.push(value);
    }
})

console.log(arr1);
// var arr1 = arr.slice();

// var arr2 = arr1.slice();

// console.log(Array.prototype)

// console.log(arr);

// console.log(arr.length);

// console.log(arr[0]);

// console.log(arr[arr.length - 1]);

// console.log(arr.slice(0, 3));

// arr.push("grapes");
// arr.unshift("mango");

// arr.pop();
// arr.shift();

// console.log(arr);

// arr.splice(0, 1);

// console.log(arr);

// arr2.splice(1, 2, "watermelon", "pineapple");
// console.log(arr, arr1, arr2);

// console.log(arr.slice(2));
// console.log(arr.splice(2));




