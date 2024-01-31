fetch("https://jsonplaceholder.typicode.com/users") 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("name").innerHTML = data[0].name;   
        document.getElementById("address").innerHTML = data[0].address.city;
    })
