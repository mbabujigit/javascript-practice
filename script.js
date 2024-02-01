//Function Declaration
function generateOTP() {
    var otp = Math.floor(1000 + Math.random() * 900000);
    return otp.toString().padStart(6, "0");
}

//Function Expression
var generateOTP2 = function () {
    console.log(a);
};

generateOTP();
var a='Babuji';
//Anonymous Function
//IIFE
(function () {
    var a='Mannamma';
    var otp = Math.floor(1000 + Math.random() * 900000);
    console.log(otp.toString().padStart(6, "0")); //otp.toString().padStart(6, "0");
    console.log(a);
})();
console.log(a);

//hoisting
console.log(generateOTP());
console.log(generateOTP2());

//falsy values  0, "", undefined, null, NaN 
