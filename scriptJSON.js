var student = {
    firstName: "Babuji",
    lastName: "Mannamma",
    age: 40,
};

document.getElementById("name").innerHTML = JSON.stringify(student,null,8);

console.log(student);
console.log(JSON.stringify(student));

var studentString = JSON.stringify(student,null,4);
console.log(JSON.parse(studentString));

var json = '{"firstName": "Babuji", "lastName": "Mannamma", "age": 40}';
console.log(JSON.parse(json));

