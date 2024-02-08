var student = [
    {
        firstName: "Babuji",
        lastName: "Mannamma",
        age: 40,
        gender: "Male",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    {
        firstName: "Savitha",
        lastName: "Mannamma",
        age: 35,
        gender: "Female",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    {
        firstName: "Nithin",
        lastName: "Mannamma",
        age: 22,
        gender: "Male",
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
]

var maleStudents = student.filter(function (student,index) {
    return student.gender === "Male";
});

console.log(maleStudents)

var femaleStudents = student.filter(function (student,index) {
    return student.gender === "Female";
});

console.log(femaleStudents)