"use strict"

// function sqrt(x){
//     return x * x;
// }


// // анонимная функция
// let sqrt = function (x){
//     return x * x;
// };

// let res = sqrt(4);
// console.log(res);

// // стрелочные функции
// res = changeNum(12,sqrt)
// res = changeNum(12, x => x + 10);

let ints = [45,78,12,-90,3335]
ints.sort(compare);
ints.sort((a,b) => b - a);
console.log(ints);


function compare(a,b) {
    // - 1 (отриц цисло), если а меньше b
    // 1 (полож число) если а больше b
    // 0 если а равно b
    return b - a;
}

