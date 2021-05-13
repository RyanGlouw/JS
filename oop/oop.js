class Point {
    #x;
    #y;
    constructor({x, y}) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    toString(){
        return `x = ${this.#x}, y = ${this.#y}`;
    }
}


class Article {
    #title;
    #text;
    #created = new Date();
    constructor(title, text) {
        this.#title = title;
        this.#text = text;
    }

    get title() {
        return this.#title;
    }

    get text() {
        return this.#text;
    }

    get created() {
        return this.#created;
    }

    toString(){
        return `статья ${this.#title} написана ${this.#created}`;
    }
}

let article = new Article("Название", "текст");
console.log(article.toString());

let point = new Point({x:30, y:12});
console.log(point.toString());