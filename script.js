var student={
    name: "Babuji",
    age: 40,
    marks: 90,
    address: {
        city:"Chennai"
    }
}

console.log(student);
console.log(typeof(student));

var keys = Object.keys(student);
console.log(keys);

var values = Object.values(student);
console.log(values);

var entries = Object.entries(student);
console.log(entries);

var array = Object.entries(student);
console.log(array[3][1]);