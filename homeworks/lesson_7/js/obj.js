// Задача 1
// Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.
// Если значение from и to не числа, а obj не объект, функция прерывает свою работу и возвращает false.
// Если данные валидны, функция формирует и возвращает новый ОБЪЕКТ с объектами,
// значения свойств price которых лежат в диапазоне от значения from до значения to, не включая to.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getNewObj(obj, to, from){
    let newOb = {}
    if (typeof to !== 'number' && typeof from !== 'number' && typeof obj !== 'object'){
        return false
    }
    for (let returnObj in obj){ 
        if (obj[returnObj].price > to && obj[returnObj].price < from){
            newOb[returnObj] = obj[returnObj];
        }
    }
    
    return newOb;
}
console.log(getNewObj(goods,2500,4000));

// Задача 2
// Написать функцию, которая принимает на вход объект obj (например, goods), название (title) и количество (countToCart).
// Если значение title не строка, obj не объект, а count не число, функция прерывает свою работу и возвращает false.
// Функция должна найти товар с указанным названием (title):
// если количество позволяет, то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,
// если не позволяет, то вывести информацию об этом в консоль и вернуть false.


// let goods = {
//     piano: {
//         title: "Пианино",
//         price: 3000,
//         count: 25
//     },
//     guitar: {
//         title: "Гитара",
//         price: 1200,
//         count: 40
//     },
//     drum: {
//         title: "Барабаны",
//         price: 2700,
//         count: 12
//     },
//     flute: {
//         title: "Флейта",
//         price: 900,
//         count: 50
//     },
//     harp: {
//         title: "Арфа",
//         price: 3400,
//         count: 5
//     }
// };

// function findTitle (obj, title, countToCart){

// }


// Задача 3
// Написать функцию, которая принимает на вход массив arr (например, books) и фамилию автора.
// Создает и возвращает  новый массив, в который войдут все книги указанного автора,
// если такого автора нет, возвращает пустой массив.

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

function getBooks(arrOfAuthors,name){
    let booksOfAuthor = [];
    for (let object of arrOfAuthors){
        if(object.author === name){ 
            booksOfAuthor.push(object.title);
        } 
    }

    return `Книги: ${booksOfAuthor}`;
}
console.log(getBooks(books, 'Пушкин'));

// Задача 4
// Отсортировать массив books по значению свойства title вложенных объектов.

function sortFunc(a,b){
if (a.title < b.title){
return -1;
}
if (a.title > b.title){
return 1;
}
return 0;
}

console.log(books.sort(sortFunc))