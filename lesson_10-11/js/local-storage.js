'use strict'

// локальное хранилище localstorage
let storage = localStorage; // можно использовать и без переменной, на 1 домен доступно 5mb
// {"ключ" : "значение"}; и ключ и локальное хранилище переходит в строку
// если массив или обьект сохранит в локальное хранилище то он будут переобразованы в строки и работать с ними не получится

console.log({"key":"vsl"} + "");


// color -ключ red - значение
storage.setItem("color", "red"); // добавление любых данных
storage.setItem("background", "yellow");
// получение данных из локального хранилища
console.log(storage.getItem("color"));
console.log(storage.getItem("background"));

let arrData = [
    {
        background: "red",
        color: "green"
    },
    {
        background: "yellow",
        color: "black"
    },
    {
        background: "pink",
        color: "purple"
    }
];

let arrToJson = JSON.stringify(arrData) // JSON это обьект
console.log(arrToJson);

storage.setItem("array", arrToJson); // тип данных arrToJson = string

// тип данных arrFromStorage - string
let fromStorage = storage.getItem("array"); // setItem добавление, getItem -получение
let arrFromStorage = JSON.parse(fromStorage); // создаст массив а внутри будут обьекты с цветами
console.log(arrFromStorage);

arrFromStorage.push({background: "white", color: "blue"});

storage.setItem("array", JSON.stringify(arrFromStorage)); // преобразуем массив в JSON строку, потом добавляем в хранилище по ключу array;