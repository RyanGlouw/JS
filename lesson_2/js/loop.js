"use strict";

let userInput = parseInt(prompt('Введите данные'));  //модальное окно , parseInt считывает число из строки (только число до какого либо не number символа)
// а parseFloat считывает из строки число с плавающей точкой но берет первое число
console.log(userInput);


циклы
while (true) {
    let userInput = parseInt(prompt('Введите число'));
    console.log(userInput * 2);
    if (userInput === 0) break; // break работает только в циклах и свиче
}

let start = 1;
let end = 14;

// вывести в консоль все четные числа от start до end

while (start <= end) {
    if (start % 2 === 0) console.log(start);
    start +=1;
}

// от 90 до 0 с шагом 5

for (let i = 90; i >= 0; i-=5) {
 console.log(i);
}

// 3. Задача на цикл while
// Считать с консоли количество тарелок и количество моющего средства
// Моющее средство расходуется из расчета 0.5 на 1 тарелку
// В цикле выводить сколько моющего средства осталось после мытья каждой тарелки.
// В конце вывести сколько тарелок осталось, когда моющее средство закончилось или наоборот.

let plates = 10;
let  fairy = 4;

while (plates > 0 && fairy > 0) {
    plates -= 1;
    fairy -=0.5;
}
console.log(plates, fairy);

// 4. Программа загадывает число в диапазоне [1;9]
// Пользователь вводит число с клавиатуры
// Программа в зависимости от введенного числа выводит в консоль следующее:
// "загаданное число больше"
// "загаданное число меньше"
// "Вы угадали" (программа завершает работу)
// если введен 0, выводит "выход из программы" (программа завершает работу)

let num = 4;
while (true) {
    // ввести число 
    // сверить через if
    let userNum = parseInt(prompt('Угадайте число'));
    if (userNum === 0) {
        console.log('Игра завершена');
        break;
    }
    if (userNum === num) {
        console.log('Вы угадали');
    }
    if(userNum > num) console.log('загаданное число меньше');
    else console.log('загаданное число больше')
}