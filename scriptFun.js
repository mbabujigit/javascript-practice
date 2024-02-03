console.log('Hi outside');

function add(a = 0, b = 0) {
    console.log(a + b);
}

add(1, 2);
add(3, 4);
add(5, 6);

function generateOTP() {
    const otp = Math.floor(1000 + Math.random() * 900000);
    otp.toString().padStart(6, "0");
    console.log(otp);
}

generateOTP();