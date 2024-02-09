var students = [
    {
        firstName: "Babuji",
        lastName: "Mannamma",
        age: 40,
        gender: "Male"
    },
    {
        firstName: "Savitha",
        lastName: "Mannamma",
        age: 35,
        gender: "Female"
    },
    {
        firstName: "Nithin",
        lastName: "Mannamma",
        age: 22,
        gender: "Male"
    },
];

var table = document.getElementById("table");

students.forEach(function (student) {
    var row = table.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.lastName;
    row.insertCell(2).textContent = student.age;
    row.insertCell(3).textContent = student.gender;

});

console.log(table);