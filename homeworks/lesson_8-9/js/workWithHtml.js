// Задача 1
// Написать функцию генерации карточек с информацией о животных

//         function getCats() {
//             return [
//                 {
//                     "name": "Люся",
//                     "age": "1 год",
//                     "color": "трехцветная",
//                     "additional_info": {"vaccinations": true, "passport": true}
//                 },
//                 {
//                     "name": "Том",
//                     "age": "3 месяца",
//                     "color": "белый",
//                     "additional_info": {"vaccinations": false, "passport": false}
//                 },
//                 {
//                     "name": "Макс",
//                     "age": 2,
//                     "color": "серый",
//                     "additional_info": {"vaccinations": false, "passport": true}
//                 },
//                 {
//                     "name": "Василий",
//                     "age": 3,
//                     "color": "черный",
//                     "additional_info": {"vaccinations": true, "passport": true}
//                 }
//             ];
//         }

// Задача 2
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным названиям свойств.
// Заголовки ячеек - названия свойств.
// Например, для articles заголовками будут: id, title, text, author; для goods заголовками будут: title, price, count и тп.

//         Массивы для тестирования:
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

//         Примеры вызова функции:
//         generateTable(articles); - генерация таблицы со статьями
//         generateTable(goods); - генерация таблицы с товарами


function generateTable(array) {
    if(array.length == 0) return false;
    let tableElem = document.createElement("table");
    tableElem.classList.add("table");
    let tr = document.createElement("tr");
    
    for (let header in array[0]) {
        let th = document.createElement("th");
        th.classList.add("th");
        th.innerText = header.toUpperCase();

        tr.append(th);

    }
    tableElem.append(tr);
    for (let elem of array){
        let tr = document.createElement("tr");
        for(prop in elem){
            let td = document.createElement("td");
            td.classList.add("td");
            td.innerText = elem[prop];
            tr.append(td);
        }
        tableElem.append(tr);
    }
    document.querySelector("body").append(tableElem);

    
}
console.log(document.write("<h2>Таблица 1</h2>"))
generateTable(articles)
console.log(document.write("<h2>Таблица 2</h2>"))
generateTable(goods)



// Задача 3
// Написать функцию generateField(n) по генерации поля размером n x n.
// Значение n не может быть меньше 3.
// Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise.
// Значения атрибута prise - значения ключей объекта
// let prises = {
//     headphones: "Наушники",
//     book: "Книга",
//     postcard: "Открытка"
// };

function generateField(n, data){
    n = n >= 3 ? n : 3;
    let field = document.createElement("div");
    field.style.cssText = 
        "margin 0 auto;" +
        "width 40vw;" +
        "display: flex;" +
        "flex-wrap: wrap";

    // n * n - общее колличество ячеек внутри field
    for(let i = 0; i < n * n; i++){
        let cell = document.createElement("div")
        cell.style.border = "1px solid black";
        cell.style.width = cell.style.height = (40 / n) + 'vw';
        field.append(cell);
    }
    return field;
}

document.body.append(generateField(4));