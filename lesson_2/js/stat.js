"use strict";

// if, switch

let state = 1;
// if(state === 0) console.log('Загрузка завершена');  инструкций может быть много

if (state === 0) {
    console.log('Загрузка завершена'); //  переменная будет приводится к булевому типу если после state не будет идти сравнение если не будет else
} else if (state === 1) {
    console.log('Загрузка...')
} else {
    console.log('Ошибка статуса');
}

// даны переменные age и exp
// если значения переменной age больше 100 вывести в консоль 'мы вам перезвониим'
// в противном случае перейти к проверке exp
// если exp меньше 5 вывести вы подходите на должность стажера
// иначе вывести 'вы подходите на должность разработчика'

let age = 100;
let exp = 5;

if (age < 18 || age > exp || exp < 0) {
    console.log('Ошибка ввода данных');
}
else if (age > 100) {
    console.log('мы вам перезвоним');
} else if (exp < 5) {
    console.log('вы подходите на должность стажера');
} else {
    console.log('вы подходите на должность разработчика');
}


let month = 'январь';
switch (month) {
    case 'декабрь':
    case 'январь':
    case 'февраль':
        document.body.style.background = "blue";
        break;
    case 'март':
    case 'апрель':
    case 'май':
        document.body.style.background = "yellow";
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        document.body.style.background = "green";
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        document.body.style.background = "orange";
        break;
    default:
        console.log('Ошибка ввода')
        document.body.style.background = "black";
}
// Даны переменные sum - сумма покупки и code - номер купона
// code: 4653 - скидка 30%
// code: 2942, 9075 - скидка 20%
// code: 7899, 1188, 9045 - скидка 30%

let sum = 12000;
let code = 4643;

switch (code) {
    case 4643:
        sum = sum * 0.7;
        break;
    case 2942:
    case 9075:
        sum = sum * 0.;
        break;
    case 7899:
    case 1188:
    case 9045:
        sum = sum * 0.7;
        break;
    default:
        console.log('скидка не предусмотрена');
}
