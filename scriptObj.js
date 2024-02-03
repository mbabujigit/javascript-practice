var student1 = {
    firstName: "Babuji",
    lastName: "Mannamma",
    age: 40,
};

var student2 = Object.assign({}, student1);

student2.age = 42;

console.log(student1);
console.log(student2);


Object.seal(student1);
student1.age = 45;

console.log(student1);

Object.freeze(student1);
student1.age = 50;

console.log(student1);

var a = "20";
var b = 20;
console.log(a == b);
console.log(a === b);
console.log(typeof a);
console.log(typeof b);
console.log(Object.is(a, b));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

