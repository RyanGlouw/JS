"use strict"

// first commit

// 1. В переменной n хранится двузначное число.
// Найти сумму цифр числа n и вывести в консоль.
// Например, для числа 56 вывод будет 5 + 6 = 11,
//           для числа 23 вывод будет 2 + 3 = 5.

let n = 56 % 10 + (56 - 56 % 10);
console.log(n);

// 2. Поменять значение двух переменных местами
// без использования третьей переменной.
let first = 10;
let second = 20;

[first, second] = [second, first];
console.log(`${first} ${second}`);
console.log(first, second); // второй более простой вывод


// 3. Задать высоту, ширину и длину прямоугольного параллелепипеда,
// найти его площать, результат вывести в консоль.

let a = 10;
let b = 5;
let c = 15;
let areaOfParallel = 2 * (a * b + b * c + a * c);
console.log(areaOfParallel);



// 4. Задача на тернарный оператор
// Даны 2 переменные типа number start и end.
// Если start меньше end переменной between присвоить значение end - start,
// в противном случае -1

let start = 10;
let end = 20;
let between;

between = start < end ? end - start : - 1;
console.log(between);
