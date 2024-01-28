var student1 = {
    name: "John",
    age: 20,
    marks: 80,
    address:{
        city: "Delhi",
        state: "Delhi",
        pincode: 110001,
        country: "India",
        language: "Hindi"
    }
} 

var student2 = {...student1} // shallow copy of student1
student1.name = "Mannamma";
student2.name = "Babuji";

console.log(student1);
console.log(student2);
console.log(student1.name);
console.log(student2.name);
console.log(typeof student1)
console.log(typeof student2)