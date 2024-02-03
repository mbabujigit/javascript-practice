var student = {
    firstName: "Babuji",
    lastName: "Mannamma",
    age: 40,
};

console.log(student.length)

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));

var keys = Object.keys(student);

for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}


var values = Object.values(student);

for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}

console.log(student);
console.log(typeof student);
console.log(Array.isArray(student));

console.log(JSON.stringify(student));
