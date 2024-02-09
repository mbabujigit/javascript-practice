var form = document.getElementById("userForm");
console.log(form);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    // var firstName = document.getElementById("firstName").value;
    // var lastName = document.getElementById("lastName").value;
    // var email = document.getElementById("email").value;
    // var phone = document.getElementById("phone").value;
    // var password = document.getElementById("password").value;
    // var gender = document.querySelector('input[name="gender"]:checked');

    // console.log(firstName, lastName, email, phone, password, gender);

    // var user = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phone: phone,
    //     password: password,
    //     gender: gender.value
    // }


    //--Otherway of doing it
    var formData = new FormData(form);
    var user = {};
    formData.forEach(function (value, key) {
        console.log(key, value);
        user[key] = value;

    })

    console.log(user);
    document.getElementById("user").innerHTML = JSON.stringify(user, null);
});