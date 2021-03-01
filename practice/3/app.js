const body = document.body;
const myh1 = document.createElement('h1');
myh1.innerText = "sample sample";
body.append(myh1);

function countdown(number) {
    console.log(number);
    const newNumber = number--;
    if (newNumber > 1) {
        countdown(number);
    }
}
countdown(4);

function factorial(number) {
    if (number === 0) {
        return 1
    }
    return number * factorial(number - 1);
}
console.log(factorial(5));


var gcd = function (a, b) {
    if (!b) {
        return a;//then this code will be executed when b is not here anymore
    }

    return gcd(b, a % b);//keeps looping the until the b(second parameter) returns to nothing

};
console.log(gcd(2154, 458));


var gcd2 = function (x, y) {
    if (!y) {
        return x
    }
    return gcd2(y, x % y);
}
console.log(gcd2(6, 2));

function factorial2(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial2(num - 1)
}
console.log(factorial2(2))



