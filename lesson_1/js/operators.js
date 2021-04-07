'use strict';

// арифметические операторы

let a = 3, b = 5, c = '8', d = 'семь';

let res = a + b;
console.log(res); // 8

res = a + c; // '3' + '8'
console.log(res);

res = a + " " + d;
console.log(res); // 3 семь

res = +c; // преобразует тип данных
console.log(res);

res = +d;
console.log(res); // NaN относиться к числам (но не является числом) т е сообщение о том что мы получили не число

res = a * c;
console.log(res); // NaN

// все операторы кроме + будут приводить операнды (значения) к числу

a = 7;
b = 3;
res = a / b;
console.log(res); // 2.3333333333333335 на точность вычислений с плавающей точкой полагаться не стоит

res = a / 0;
console.log(res); // Infinity

a = 7;
b = 2;
res = a % b;
console.log(res);

//как происходит деление остатка -  7 / 2 = 3.5 и 3.5 далее = 0.5 + 0.5 = 1
// если делится без остатка ЧЕТНОЕ а если делится с остатком то НЕЧЕТНОЕ

console.log(9 % 8);
console.log(9 % 7);
console.log(9 % 6);


// операторы присваивания

let num = 10;

num += 10;

console.log(num);

num = num + 10; // += 10;
num *= 10; // num = num * 10

// операторы сравнения (они сравнивают и возвращают результат true либо false)

a = 5;
b = 8;
c = '5';

res = a !== c;

console.log(res);

// тернарные операторы ?

a = 8;
b = 2;
// условие/логическое выражение ?
res = a % b === 0 ? a / b : a * b; // используем если инструкция маленькая иначе используем if else
console.log(res); // 4

res = a % b === 0 ? true : false // true : false будет лишнее т к они и так вернут true или false

// логические операторы

res = (a % b === 0) && (b > 100) ? 'true' : 'false'; // если первый false то он не проверяет дальше
console.log(res);

res = (a % b === 0) || (b > 100) ? 'true' : 'false'; // а тут если первое true то он не идет дальше а если fasle то проверяет второе значение
console.log(res);

// ! НЕ - меняет значение на противоложное

let selected = true;
res = !selected;
console.log(res) // false

selected = '';
res = selected;
// в false преобразуется в 0, null, undefined, NaN, ''
// все остальное преобразуется в true
selected = null;
res = !selected ? 'true' : 'false'
console.log(res);


