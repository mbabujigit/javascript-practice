var arr = ["apple", "banana", "cherry", "orange", "kiwi", "banana", "mango", "orange", "cherry", "apple", "banana"];

var arr1 = [];

arr.forEach(function (value) {
    
    console.log(value);
    if (!arr1.includes(value)) {
        arr1.push(value);
    }
})

console.log(arr1);