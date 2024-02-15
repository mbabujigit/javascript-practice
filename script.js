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

students = students.map(function (student) {
    if (student.gender === "Male") {
        student.color = "blue";
    } else {
        student.color = "red";
    }
    return student;
});

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
        <td style="color:${students.color}">${students.gender}</td>
        <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = studentsHtml.join('');
}

function deleteRow(row) {
    var index = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(index);
}

document.getElementById("genderFilter").addEventListener("change", filterTable);

function filterTable(event) {
    // try {
    //     console.log(event.target.value.haa.gg);
    // } catch (error) {
    //     console.log(error);
    // }
    var filteredStudents = students.filter(function (student) {
        return student.gender?.toLowerCase() === event.target?.value?.toLowerCase()
    });
    bindData(filteredStudents);

}
