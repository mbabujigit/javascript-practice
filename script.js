var arr = [0, 1, false, true, "a", `b`, null, NaN, undefined];
var output = [];
for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i]) {
        output.push(arr[i]); // output = arr[i]
    }
}
console.log(output) ;
var output2 = [];
var name="Babuji";
console.log(name.length)
for(var value of name){
    console.log(value);
    if(value){
        output2.push(value);
    }
}

console.log(output2) ;
