class Storage {
    constructor(storageName, ...booksToStorage) {
        this._name = storageName;
        this._books = booksToStorage;
    }
    // это  метод
    addBook(book) {
        if (book instanceof Book) { // оператор instanceof проверяет принадлежность обьекта указанному типу данных, т е если первый будет number а 2й будет string то будет false
            this._books.push(book)
        }
    }
}