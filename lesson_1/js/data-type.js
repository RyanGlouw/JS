'use strict';
// (строгий режим) позволяет видеть больше ошибок, ставить если использую старый синтексис языка, или небезопасную инструкцию

// однострочный коммент
/* многострочный
коммент */

// отладка
console.log('Данные для отладки');

// переменные (выделенная область память у которой есть данные)
// обьявление переменных (когда создаем переменную 1й раз)

let age = 26;
age = 27;
console.log(age);

let login = "qwe", password = "qwerty123"; // переменные чувствительны к регистру и исп CamelCase

let height = 400;
let width = 700;

let active /* на active значение не установили */, closed = 1;

// значение константы необходимо присвоить в момент обьявления
// нельзя изменить в дальнейшем
const PI = 3.14  // пишем в верхнем регистре и каждое последующее слово отделяем через _
console.log(PI);

// var data = "something"; - старый способ, не использовать

// типы данных которые мы можем сохранят в переменные
// 1 примитивные типы 
// 2 ссылочные типы

// примитивные типа данных
// number (числа) 
height = 89;
width = 23.89;
let degree = -100;

// string (строки)
degree = "-100C";
let userLogin = "wind009";
userLogin = 'qwe';

let loginInfo = `Значение переменной ${userLogin}`;
console.log(loginInfo);

// boolean (логический тип) - используется для сохранения состояний
active = true;
closed = false;
console.log(active, closed);

// null (неизвестно)
let books = null;

// undefined (значение не было присвоено)
let elem;
console.log(elem);

// typeof имяпеременной (определение типа данных переменной)
console.log(typeof degree);
console.log(typeof active);
console.log(typeof age);

