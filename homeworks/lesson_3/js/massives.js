let numbers = [1,-2,3,-4,5];
let newArr = [];
for (let i = 0; i < numbers.length; i ++) {
 if(numbers[i] <= 0){
    newArr += numbers.splice(i,1);
}
}
console.log(numbers);
console.log(newArr);