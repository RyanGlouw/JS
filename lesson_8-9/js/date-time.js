'use strict';

let currentDate = new Date();
console.log(`Число ${currentDate.getDate()}`);
// 0 - воскресенье, 6 - суббота
console.log(`День недели ${currentDate.getDay()}`);
// 0 - январь
console.log(`Месяц ${currentDate.getMonth()}`);
console.log(`Год ${currentDate.getFullYear()}`);
console.log(`Дата строкой ${currentDate.toDateString()}`);
// от 0 до 23
console.log(`Часы ${currentDate.getHours()}`);
// от 0 до 59
console.log(`Минуты ${currentDate.getMinutes()}`);
// от 0 до 59
console.log(`Секунды ${currentDate.getSeconds()}`);
console.log(`Время строкой ${currentDate.toTimeString()}`);
