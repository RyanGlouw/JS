// обьекты исп для хранения данных в паре ключ: значение
// обьекты исп в ООП

let userData = {}; // [] - array, {} - object
console.log(userData);

userData.name = 'Anna'; // что бы обратится к свойству пишем название обьекта . название свойства = название значения
console.log(userData);
console.log(userData.name); // 'Anna'

userData.age = 27;
console.log(userData.age); // 27
console.log(userData['age']);

// свойства могут быть строками, всё что к строке преобразуется, тип symbol

userData.favouriteColors = ['red', 'orange', 'yellow'];
console.log(userData.favouriteColors[1]);

console.log(userData.img); // undefined

// если мы пытаемся получить значение свойства которого нет в обьекте то получаем undefined всегда

// проверка на наличие своств в обьекте
// 1 вариант
userData.img = null
if (userData.img === null) userData.img = 'default.png'; // если обьект пока пустой то пишем null
if ('githublink' in userData) // оператор in возращает true если свойство с таким названием githublink есть в userData и false если githublink нет в userData
    console.log(userData.img);

let jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};
let cssBook = {
    title: 'About CSS',
    author: 'CSS Junior',
    pageCount: 1700
};

userData.books = [jsBook, cssBook];

console.log(userData.books[1]['pageCount']); // вызываем обьект с массивом cssBook и свойство pageCount
console.log(userData.books[1].pageCount);

for (let i = 0; i < userData.books.length; i++) {
    if (userData.books[i]['pageCount'] > 500) {
        console.log(userData.books[i].title);
    }
}

for (let book of userData.books) {
    if (book.pageCount > 500) console.log(book.title);
}

let message = [ // запросить у пользователя код и добавить в отдельный массив
    {
        text: 'Срочное',
        priority: 'high',
        code: 99
    },
    {
        text: 'Просто сообщение',
        priority: 'low',
        code: 8
    },
    {
        text: 'Срочное сообщение',
        priority: 'high',
        code: 88
    },
];

// let userCode = +prompt('Введите код')
// let text = [];

// for (let oneMess of message){
//     if(oneMess.code >= userCode){
//         text.push(oneMess.text);
//     }
// }
// console.log(text);


// перебор обьектов - циклом for in - специально для обьектов // for of - для перебора массивов и html элементов
for (let propertyName in jsBook) { // в переменной propertyName на 1 итерации будет title и тд
    // jsBook.propertyName  будет undefined
    console.log(`Имя свойства ${propertyName}, значение ${jsBook[propertyName]}`)
}

// массив с ключами обьекта
let keys = Object.keys(jsBook); // ["title", "author", "pageCount"]
console.log(keys);

// массив со значениями обьекта
let values = Object.values(jsBook);
console.log(values); //  ["About JS", "JS Junior", 102]


// массив пар [ключ(свойство): значение]
let entries = Object.entries(jsBook);
console.log(entries);

// Дестректуризация обьекта // позволяет получить отдельные переменыые значение переменных будет значения свойств обьектов

jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};

let { title, author, pageCount, img = 'default.png', ...other } = jsBook; // сначала будем перечислять переменные // img работает как аргументов по умолчанию как в функции
console.log(title);
console.log(author);
console.log(pageCount);
console.log(img);

let { login, pwd, ...others } = {
                                login: "qwerty",
                                pwd: '123qwerty',
                                phone: 99999999999,
                                email: '1@gmail.com'
                                };

console.log(login);
console.log(pwd);
console.log(others);

let {name: userName, age: userAge} = {name: 'Anna', age: 33};
console.log(userName);
console.log(userAge);

// Дестректуризация обьекта в параметрах функциии

jsBook = {
    title: 'About JS',
    author: 'JS Junior',
    pageCount: 102
};

function doSmth({title, author, img = 'default.png'}){ // внутри функции обращаемся уже к переменным а не к обьекту
    console.log(title);
    console.log(author);
    console.log(img);
}

doSmth(jsBook);

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
    for (let returnObj in obj){ // на 1 итерации будет просто piano
       
        if (obj[returnObj].price > to && obj[returnObj].price < from){
            newOb[returnObj] = obj[returnObj];
        }
    }
    return newOb;
}
console.log(getNewObj(goods,3000,4000));