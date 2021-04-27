'use strict';


let titles = document.querySelectorAll(".article p:first-child"); // на коллекцию html события добавить НЕЛЬЗЯ, нужно перебирать циклом и вешать события по отдельности
// перебор html коллекции
for (let title of titles) {
    console.log(title);
    // добавление обработчика событий
    title.addEventListener("click", openDescription);
}

function openDescription() {
    console.log(this); // контекст вызова функции, тот элемент на который мы вешаем обработчик события, у стрелочных функций this-а нету
    this.nextElementSibling.classList.toggle("open"); // nextElementSibling это следующий элемент после тэга который был в titles, toggle добавит класс если он есть
}

// html атрибут data-*
// data-prise="dog"
// получение значения data атрибута:
// элемент.dataset.prise // dog

let getPresent = () => {
    return {
        dog: "Собака",
        book: "Книга",
        car: "Машина"
    }
}

let presentContainer = document.getElementById("present_container");

presentContainer.addEventListener("click", showPresent);

function showPresent(event) { // когда событие на элементе происходит то в функцию передается обьект который содержит инфо об этом событии
    console.log(event); 
    let clickElem = event.target; // что бы получить именно тот элемент на котором событие произошло
    console.log(clickElem);
    let presentValue = clickElem.dataset.prise
    console.log(presentValue);
    if(presentValue !== undefined){
        let prises = getPresent();
        clickElem.innerText = prises[presentValue];
        clickElem.classList.add("present");
        // удаление обработчика события
        this.removeEventListener("click", showPresent); // 
    }
}
