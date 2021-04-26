
// 1. На многомерный массив
// Дан массив:
//     [
//         [23, 56, 75, -90, 123],
//         [17, 0, -6429, -122],
//         [19, 86, 55, -3, 900, 0, 0],
//         [4, 9, -2]
//     ]
// Увеличить значение каждого элемента массива на 10

let arr = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] += 10;
    }
}

console.log(arr);




// 2. Создать массив из целых чисел, заполнить массив рандомными значениями. Размер массива - 7.
// Поменять элементы с максимальным и минимальным значениями местами.


// не разобрался до конца

let num = [34, 78, -90, 1, 0, -5];
let min = Number.MAX_VALUE; // -90
let max = Number.MIN_VALUE;
let minInd = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
        minInd = i;
    } // в цикле просто if -оф может быть любое колличество
    if (num[i] > max) {
        max = num[i];
    }

}

num[minInd] = max;

// 3. Создать массив из целых чисел.
// Отрицательные элементы массива скопировать в новый массив.

let numbers = [1, -2, 3, -4, 5, -6];
let minArr = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        let num = numbers.splice(i, 1);
        minArr.push(num);
    }
}
console.log(minArr);
console.log(numbers); // более сложный вариант

let numbers = [1, -2, -3, 4, 5];
let minArr = numbers.splice(1, 2);
console.log(minArr);
console.log(numbers); // более простой и не практичный

let numbers = [1, -2, 3, -4, 5, -6];
let newNums = [];
for (let i = nums.length; i >= 0; i -= 1) {
    if (nums[i] < 0) {
        newNums.push(nums[i]);
    }
}

