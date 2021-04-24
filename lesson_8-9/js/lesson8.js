'use strict';

function getGoods() {
    return {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: "https://picsum.photos/id/345/300"
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: "https://picsum.photos/id/988/300"
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: "https://picsum.photos/id/123/300"
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: "https://picsum.photos/id/162/300"
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: "https://picsum.photos/id/163/300"
        }
    };
}


/*<div class="card">
    <h2></h2>
    <img src="">
    <p></p>
    <p></p>
</div>*/
function generateCards(where, object) {
    for (let propertyName in object) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card"); // "card", "text-center"

        let title = document.createElement("h2");
        title.innerText = object[propertyName].title;

        let img = document.createElement("img");
        img.setAttribute("src", object[propertyName].img);

        let price = document.createElement("p");
        price.innerText = `Цена ${object[propertyName].price}`;

        let count = document.createElement("p");
        count.innerText = `Количество ${object[propertyName].count}`;

        cardDiv.append(title, img, price, count);
        where.append(cardDiv);
    }
}

generateCards(document.querySelector(".items"), getGoods());








let date = new Date();
let day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes();


