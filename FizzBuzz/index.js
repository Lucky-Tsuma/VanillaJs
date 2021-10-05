function fizzBuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) return "Fizz Buzz";
    if (x % 3 === 0) return "Fizz";
    if (x % 5 ===0) return "Buzz";
    return x;
}

for(let x = 0 ; x <= 100; x++) {
    console.log(fizzBuzz(x));
}

