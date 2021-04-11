'use strict'

let ints = []; // создание пустого массива
console.log(ints);

let color = ["blue", "red", "yellow", "pink"];
console.log(color);

// разряженный массив - если есть пустые слоты то это не правильно, так делат нельзя
let nums = [2,78, , 90, , , -12];
console.log(nums);

// свойство lenght - длинна массива, туда входят нормальные и пустые элемент
console.log(color.length); // последний индекс 3 + 1 (так идет подсчет)
console.log(nums.length); 

// доступ к элементам массива
color = ["blue", "red", "yellow", "pink"];
color[1] = "orange";
console.log(color);

let elem = color[0];
console.log(elem);

console.log(color[30]); // undefined;
color[47] = 'black';
console.log(color); // 48
// color.lenght если в lenght запишем например 700 то изменится размер  на 700

// многомерный массив
nums = [
    [55, -991, 34, 0],  // индекс этого массива 0
    [9, 23, 81], // индекс этого массива 1
    [99, 4] // индекс этого массива 2
];

let firstArr = nums[1];
console.log(firstArr); // [9, 23, 81]

console.log(firstArr[2]); //81
console.log(nums[2][1], nums[1][1]); // 4 23
nums[1][1] = 22;

console.log(nums);

// перебор массивов
ints = [67, 99, 12, 65, 6];
let str = "Значения элементов массива ints "; // если обьявление переменных будет внутри { } то вне этих скобок переменная не будет доступна

for (let i = 0; i < ints.length; i++){
    console.log(ints[i]);
    str += ints[i] + " ";
    ints[i] += ints[i]; // обращаемся к элементам массива умножаем его на себя
}
console.log(str);
console.log(ints);

// цикл for of - перебирает массив и html коллекции (набор html элементов)
let cyclesNums = 0;
ints = [67, 99, 12, 65, 6];
for (let arrElem of ints) {
    cyclesNums += arrElem; // суммирование элементов как 2 * 2
    console.log(cyclesNums);
}

let pics = ["01.jpg","02.jpg","03.jpg","04.jpg"];

let picsSection = document.getElementById("pics");

for (let pic of pics){
    // <img>
    let img = document.createElement("img");
    // <img src="img/" + pic>
    img.setAttribute("src", `img/${pic}`);
    picsSection.append(img);
}

// методы массивов - возможности 

// 1. добавление/удаление первого/последнего элемента массива
color = ["blue", "red", "yellow", "pink"];
let lastColor = color.pop(); // [blue, red, yellow]
console.log(lastColor);
color.pop(); // [blue, red]
console.log(console);

color.push("black", "green", "purple");// добавляет в конец массива все перечисленные элементы
console.log(color) // [blue, red, yellow "black", "green", "purple"];

// learn java script - Документация

// удаление первого элемента

let firstElem = color.shift(); // [red, yellow "black", "green", "purple"];
console.log(firstElem); // ["blue"]
color.shift(); // ["black", "green", "purple"];
console.log(console);

// добавление элементов в начало массива
color.unshift("green", "red"); // ["green", "red", "black", "green", "purple"];
console.log(color);

// splice
// slice создает новый массив на основе существующего и исходный массив не меняют
color = ["blue", "red", "yellow", "pink", "green"];
console.log(color);
// создаем новый массив
let newColor = color.slice(1,3);
console.log(newColor);

let removed = color.splice(1,2, "greenyellow", "gold"); // 1 это старт 2 это сколько элементов удалить
console.log(removed); // ["red", "yellow"]
console.log(color);

// удаление нечетных элементов массива
ints = [-3, 78, 11, 11, 45, 90, 34];
for (let i = 0; i < ints.length; i += 1) {
    if (ints[1] % 2 !== 0) {
        ints.splice(1, 1);
        i -= 1;
}
}
for (let i = ints.length - 1; i >= 0; i -= 1) {
    if (ints[i] % 2 !== 0) {
        ints.splice(i, 1);
    }
}
console.log(ints);

// - озучить методы к четвергу
// join
// includes
// indexOf / lastIndexOf
// revers
// contact
