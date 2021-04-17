"use strict"

let title = 'JavaScript'
let duration = 2.5;
let price = 2000;
let background = "yellow";

let html =
    `<div style="background:${background}">
    <h2>О курсе ${title.toUpperCase()}</h2>
    <p>Продолжительность ${duration}</p>
    <p>Стоимость ${price}</p>
    </div>`;


console.log(html);
document.body.innerHTML = html;

// строки внутри хранятся как массив символов строка
// Например - Поезд ['П','о','е','з','д'],размер строки
// будет равен размеру массива
// кодировка строки в UTF-16
// Нельзя изменить регистр строки, изменить символ

let train = "Поезд";
console.log(train.length); // 5;
console.log(train[2]); // e

// методы строк

// 1. приведение к верхнему и нижнему регистру
let newStr = train.toUpperCase(); // верхний регистр заглавных
newStr = train.toLowerCase(); // нижний регистр заглавных


// 2. trim убирает пробелы с начала и конца строки
train = ' Поезд       ';
newStr = train.trim();
console.log(newStr.length);
console.log(train.length);

// 3.
train = 'Длинный Поезд'
console.log(train.includes('ез')); // метод includes чувствителен к регистру
console.log(train.startsWith("По")); // проверяет начинается ли строка с указанной последовательностью
//чувствителен к регистру
console.log(train.endsWith("Д")); // проверяет оканчивается ли строка с указанной последовательностью
//чувствителен к регистру

// 4. массив из строки
// join из массива в строку
// split из строки в массив

let arrFromStr = train.split('')
console.log(arrFromStr);

let textFrom = arrFromStr.join(': ');
console.log(textFrom);

// сравнение строк

train = 'Поезд';
let train2 = 'поезд';

console.log(train === train2); // false из за регистра
// П 1055
// п 1087
let compareRes =  train.localeCompare(train2, undefined,
     {sensitivity: 'accent'});
compareRes = train.toLowerCase().localeCompare(train2.toLowerCase());
// метод выводит число
// 0 если строки равны
// -1 если 1я строка меньше 2й строки
// 1 если 1я строка больше 2й строки
console.log(compareRes);
train = 'Яблоко';
console.log(train.substring(1,4)); // если end не указываем то вырезает до конца строки
// Заменить все буквы в слове на строчные 

let someStr = 'maXIM';
let index = someStr[0].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(index)
let getStr = str => str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
console.log(getStr('mAxIM_Man'))

// читать про indexOf / lastIndexOf, slice