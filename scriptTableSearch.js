var students = [
    { name: "Babuji", age: 40, gender: "Male" },
    { name: "Savitha", age: 35, gender: "Female" },
    { name: "Nithin", age: 15, gender: "Male" },
    { name: "Pranathi", age: 10, gender: "Female" },
    { name: "Babuji", age: 40, gender: "Male" },
    { name: "Savitha", age: 35, gender: "Female" },
    { name: "Nithin", age: 15, gender: "Male" },
    { name: "Pranathi", age: 10, gender: "Female" },
    { name: "Babuji", age: 40, gender: "Male" },
    { name: "Savitha", age: 35, gender: "Female" },
    { name: "Nithin", age: 15, gender: "Male" },
    { name: "Pranathi", age: 10, gender: "Female" },
];

var tableBody = document.getElementById("tableBody");

bindData(students);

var searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function (event) {
    var searchValue = event.target.value;
    var filteredStudents = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchValue.toLowerCase())
            || student.gender.toLowerCase().includes(searchValue.toLowerCase())
            || student.age.toString().includes(searchValue);

    });
    bindData(filteredStudents);
    console.log(filteredStudents);
});

function bindData(students) {
    var tableBody = document.getElementById("tableBody");
    var studentsHtml = students.map(function (students) {
        return `<tr>
        <td>${students.name}</td>
        <td>${students.age}</td>
        <td>${students.gender}</td>
        </tr>`;
    });
    tableBody.innerHTML = studentsHtml.join('');
}
