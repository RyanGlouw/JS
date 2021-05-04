'use strict'

// let book1 = {
//     title: "Выразительный JavaScript",
//     author: "Марейн",
//     pageCount: 470,
//     price: "800",
// };

// let book2 = {
//     title: "Node js in action",
//     author: "Кантелон",
//     pageCount: 510,
//     price: 600,
// };

let book1 = new Book("Выразительный JavaScript", 800);
console.log(book1);
book1.author = 'Марейн'; // использование сеттеров и геттеров 
// если мы присваиваем значение значит мы обращаемся к сеттеру
console.log(book1.author) // если получаем значение значит мы обращаемся к геттеру
book1.pageCount = 100;

let book2 = new Book("Node js in action", 600);
console.log(book2);
book2.author = 'Кантелон';
console.log(book2.author)
book2.pageCount = 500;

let storage = new Storage("Библиотека"); // 2й аргумент будет пустым
// вызов метода
storage.addBook(book1);
storage.addBook(book2);