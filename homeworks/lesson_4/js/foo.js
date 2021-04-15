// console.log() вместо return использовать нельзя!

// 1. Напишите функцию, которая в зависимости от переданного в
// нее целочисленного аргумента count, будет возвращать слово "товар"
// в правильной форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).


function ingWord(count) {
    let word = 'товар';
    let ing = ['a','ов']
    if( count < 2) return word;
    if( count >= 2 && count <= 4) return count + ' ' + word + ing[0];
    if( count > 4) return count + ' ' +  word + ing[1];
}
console.log(ingWord(20));


// 2. Функция range
// Напишите функцию range, принимающую три аргумента (start, end, step=1):
// два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не передан, то равен единице)
// – шаг для построения массива.

// Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]

function range(start, end, step = 1) {
    if (typeof end == 'undefined') {
        end = 0;
        start = 0;
    }
    if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
        return [];
    }
    let result = [];
    for (let i = start; step > 0 ? i < end : i > end; i += step) {
        result.push(i);
    }

    return result;
};
console.log(range(1, 10, 2))



// 3. Написать функцию проверки на спам. (text, ...words)
// Функция принимает на вход текст и ...спам - слова
// (переменное количество аргументов).
// Определить по 5ти бальной шкале, как часто в тексте встречается спам.
// Результат вернуть из функции.

function noSpam(text, ...words) {
    let word = words;
    word = text.split(" ");
    let spam = 'bla';
    for (let i = 0; i < word.length; i++){
        if (word[i] === spam && word.length >= 1 && word.length <= 25){
            return 'Кол-во спам слов = 1 баллу' ;
        }else if (word[i] === spam && word.length >= 26 && word.length <= 50){
            return 'Кол-во спам слов = 2 балам'
        }else if (word[i] === spam && word.length >= 51 && word.length <= 75){
            return 'Кол-во спам слов = 3 балам'
        }else if (word[i] === spam && word.length >= 76 && word.length < 100){
            return 'Кол-во спам слов = 4 балам'
        }else if (word[i] === spam && word.length > 100){
            return 'Кол-во спам слов = 5 балам'
        }else return 'Спам слова не найдены';
    }
}


console.log(noSpam('bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla '));



// 4. На методы массивов (functions-2)

//         Дан массив:
//         let numsArr = [
//             [3, 5, -1, 6, 0],
//             [56, -9, 111, 6],
//             [11, 86, -12],
//         ];

//         1. Увеличить каждый элемент массива на 10
//         2. Создать массив, в который войдут положительные элементы numsArr

