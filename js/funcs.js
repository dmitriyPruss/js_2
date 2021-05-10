// 0
console.log('isAdult(20) :>> ', isAdult(20));// true
console.log('isAdult(4) :>> ', isAdult(4));; // false
console.log('isAdult(18) :>> ', isAdult(18));; // false
function isAdult(age) {
    return age >= 18 ? true : false;
};

// 1
const isPrimeNumber = function(num) {
    let i = 2;
    while(i <= num - 1) {
        if(num % i === 0) {
            return num + ' isn`t a prime number'; 
        };
        i++;
    }; 
    return num + ' is a prime number';
};
console.log('isPrimeNumber(2) :>> ', isPrimeNumber(2));
console.log('isPrimeNumber(4) :>> ', isPrimeNumber(4));
console.log('isPrimeNumber(11) :>> ', isPrimeNumber(11));
console.log('isPrimeNumber(5) :>> ', isPrimeNumber(5));
console.log('isPrimeNumber(8) :>> ', isPrimeNumber(8));

// 2
console.log('checkMultiplicity(25, 5) :>> ', checkMultiplicity(25, 5));
console.log('checkMultiplicity(15, 3) :>> ', checkMultiplicity(15, 3));
console.log('checkMultiplicity(15, 5) :>> ', checkMultiplicity(15, 5));
console.log('checkMultiplicity(15, 4) :>> ', checkMultiplicity(15, 4));

function checkMultiplicity(a, b) {
    return a % b === 0 ? true : false;
};

// 3
isTriangle(5, 5, 7);
isTriangle(3, 3, 6);
function isTriangle(a, b, c) {
    if(a + b > c && a + c > b && b + c > a) {
        console.log('It is the triangle');
    } else {
        console.log('It isn`t the triangle');
    }
};

// 4
console.log('calculateTriangleArea(5, 7, 8) :>> ', calculateTriangleArea(5, 7, 8));
function calculateTriangleArea(a, b, c) {
    const p = (a + b + c) * 0.5;
    const h = 2 * Math.sqrt(p * (p - a) * (p - b) * (p - c)) / a;
    const s = 0.5 * a * h;
    return s.toFixed(2); 
};

console.log('calculateRectangleArea(5, 7) :>> ', calculateRectangleArea(5, 7));
function calculateRectangleArea(a, b) {
    const s = a * b;
    return s; 
};

console.log('calculateParallelepipedArea(5, 7, 3) :>> ', calculateParallelepipedArea(5, 7, 3));
function calculateParallelepipedArea(a, b, c) {
    const s = 2 * (a * b + b * c + a * c);
    return s; 
};

console.log('calculateConeArea(5, 7) :>> ', calculateConeArea(5, 7));
function calculateConeArea(r, l) {
    const s = Math.PI * r * (r + l);
    return s.toFixed(1); 
};