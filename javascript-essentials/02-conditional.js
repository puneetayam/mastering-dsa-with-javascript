// OTP generator
// 4 digit otp generator


// (Math.random() * 9000) -> return value within range (0 <= x  <= 9000)❌
// return random no. but there is a catch, it will return less than 1000 value also which is not a 4 digit otp.

// where x = random no.
// 4 digit otp range (1000 <= x <= 9999)✔, so (Math.random() * 8999 + 1000)

function otpGenerator() {

    return (Math.trunc(Math.random() * 8999 + 1000))
}

let randomOTPList = [];

for (let i = 0; i < 10; i++)
    randomOTPList.push(otpGenerator());

randomOTPList.forEach((randomOTP) => console.log(randomOTP));