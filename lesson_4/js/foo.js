function getSum(first, second) { // параметры функции, функции в js можно работать напрямую
    return first + second;
}

let l = 9, k = -166;

let sum = getSum(l, k);
console.log(sum);

let x = 9, y = 91;

sum = getSum(x, y);
console.log(sum);

console.log(getSum())


// function getNum (first, second){
//     return first < second ? first : second;
// }
// console.log(getNum(1,2));


// function getNum(a, b) {
//     if (a < b) return a;
//     return b;

// }
// console.log(getNum1(1, 2));

function greetingStr(age, name = 'Гость') { // функция принимает возвраст и имя и формирует строку приветствия; // если значение не передаем то указываем 2й аргумент по умолчанию, они всегда идут в конце
    if (age < 7 || age > 200) return `${name} укажите др возраст`;
    if (age < 18) return `${name} вы не можете совершать покупки`;
    return `Привет ${name}, вам уже ${age}`
}
console.log(greetingStr(6, 'Максим'));
console.log(greetingStr(26));   // если у функции 2 аргумента а мы передаем 1 то тогда значение 2го аргумента и последующих если их больше 2 будет undefined


function paintElem(elem, color = 'yellow') {
    elem.style.background = color;
}

paintElem(document.body, 'brown');
paintElem(document.body);

let catName = "Том";
let codes = [4, 5, 6];

function changeName(str) { // примитив
    str += 'Кот';
}
function changeCodes(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 10;
    }
}

changeName(catName);
changeCodes(codes); // 
console.log(catName); // не работает
console.log(codes); // когда мы работаем с ссылочными типами то передается ссылка а когда мы работаем с примитивным типом происходит копирование

function getAverage(...nums) { // функция принимает на вход переменное количество аргументов // если 3 точки то это массив собирает все аргументы
    let sum = 0;
    for (let val of nums) {
        sum += val; 
    }
    return sum / nums.length;
}

let avg = getAverage(8, 12, -90, 45, 11, 800); // все аргументы окажутся в переменной nums
console.log(avg);
avg = getAverage(56, 0, 1);
console.log(avg);
// если функция принимает на вход несколько аргументов и есть 3 точки то ...argument идет всегда в конце 

function fullInfo(name, surname, ...others) {

}
fullInfo("Олег","Петров","22 года", "22 года", "qwe@mail.ru")

// ДЗ
//  решить 3 задачи 
//  1 правило формирования окончания - погуглить
//  2 аргументы
//  3 text ...words

//  function spam(text, ...words) {
//      text.split(" ")
//  }

//  spam("dsrerherhetberer", "db", "dfberet")