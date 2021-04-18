// 1. Написать функцию, которая принимает на вход 2 строки и возвращает 
// количество вхождений одной строки в другую.
// Например, слово "дом" встречается в строке "дом домик домой одомашненный" 
// 4 раза.

// 2. Написать функцию, которая принимает на вход строку и возвращает true,
//  если функция является полиндромом и false, если нет.
// Палиндром — это число, буквосочетание, слово или текст, которые одинаково 
// читаются по буквам или по словам как слева направо, так и справа налево.
// Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора
//  - палиндром.

function palindrom(str){
    str = str.toLowerCase();
    let reversed = str.split('').reverse().join('');
    if(reversed === str){
        return true;
    }else return false;
}
console.log(palindrom('Ротор'));


function palindrom(str){
    str = str.toLowerCase().replace(/\s/g,'');
    isPalindrom = str === str.split('').reverse().join('');
    return isPalindrom;
}

console.log(palindrom('а роза упала на лапу Азора'));