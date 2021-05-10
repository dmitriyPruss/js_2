// if
const isNumberDivisible = function(num) {
    if (num % 5 === 0) {
        console.log('without a remainder');
    } else {
        const remainder = num % 5;
        console.log(`with a remainder ${remainder}`);
    };

    if (num % 3 === 0) {
        console.log('without a remainder');
    } else {
        const remainder = num % 3;
        console.log(`with a remainder ${remainder}`);
    };

    if (num % 2 === 0) {
        console.log('without a remainder');
    } else {
        const remainder = num % 2;
        console.log(`with a remainder ${remainder}`);
    };

};
isNumberDivisible(5);
isNumberDivisible(120);
// for
// 1
const showFactorial = function(n) {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    };
    return res;
};
console.log('showFactorial(8) :>> ', showFactorial(8));
// 2
// const showSequence = function() {
//     const n = Number(prompt('Enter an integer number, please', 1));
//     let res = 1;
//     for(let i = 1; i <= n; i++) {
//         if(n === 1) {
//             break;
//         };
//         res += 1 / i;
//     };
//     return res;
// };
// console.log('Math.round(showSequence()) :>> ', Math.round(showSequence()) );
// 3
const multiplySequence = function(lim1, lim2) {
    let res = lim1;
    for(let i = ++lim1; i <= lim2; i++) {
        res *= i;
    };
    return res;
};
console.log('multiplySequence(3, 8) :>> ', multiplySequence(3, 8));
