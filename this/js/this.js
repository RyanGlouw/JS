'use strict';

let container = {
    element: document.querySelector("#container"),
    addStyle(color, background){
        console.log("addStyle this", this);
        this.element.style.cssText = `
            color: ${color};
            background-color: ${background};
            height: 200px; 
        `;
    },
    addTitle(title = "Заголовок"){
        console.log("addTitle this", this);
        this.element.innerHTML = `<h2>${title}</h2>`
    },
    addListener(){
        // при передаче ссылки на метод в метод или функцию контекст будет утерян, для привязки контекста и
        // передачи аргументов используется метод функции bind

        // 1. БЕЗ ПРИВЯЗКИ КОНТЕКСТА
        // в методе addTitle this - элемент, на который был повешен обработчик (div с id=container)
        // this.element.addEventListener("click", this.addTitle)

        // 2. С ПРИВЯЗКОЙ КОНТЕКСТА
        // в методе addTitle this - ссылка на текущий объект (let container),
        // значение title не передано и будет равно (title = "Заголовок")
        // this.element.addEventListener("click", this.addTitle.bind(this));

        // 3. С ПРИВЯЗКОЙ КОНТЕКСТА И ПЕРЕДАЧЕЙ АРГУМЕНТОВ
        // в методе addTitle this - ссылка на текущий объект (let container),
        // значение title передано и будет равно "Заголовок контейнера"
        this.element.addEventListener("click", this.addTitle.bind(this, "Заголовок контейнера"));
    }
}

container.addStyle('blue', 'yellow');
container.addListener();

