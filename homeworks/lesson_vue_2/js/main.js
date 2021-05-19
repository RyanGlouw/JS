// Задача:
// let goods = [
//             {
//                 title: "Пианино",
//                 price: 3000,
//                 count: 25
//             },
//             {
//                 title: "Гитара",
//                 price: 1200,
//                 count: 40
//             },
//             {
//                 title: "Барабаны",
//                 price: 2700,
//                 count: 12
//             },
//             {
//                 title: "Флейта",
//                 price: 900,
//                 count: 50
//             },
//             {
//                 title: "Арфа",
//                 price: 3400,
//                 count: 5
//             }
// ];
// Вывести информацию о товарах в html, по каждому товару вывести: название, стоимость, количество и кнопку "Добавить в козину".
// Выводить в отсортированном по count виде.
// При каждом нажатии на кнопку "Добавить в козину" количество данного товара уменьшается на 1.
// В css создать 3 класса (zero, not-many, many)  для выделения товаров в зависимости от значения count:
// если значение count равно 0, элементу добаляется класс zero,
// если значение count от 1 до 20, элементу добаляется класс not-many,
// если значение count от 20, элементу добаляется класс many.
// © 2021 GitHub, Inc.

'use strict'

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

let app = Vue.createApp({
  data() {
    return {
      allgoods: goods,
    }
  },

  // все методы которые должны сработать при наступлении событий описывается в обьекте methods

  methods: {
  },

  // вычисяемое свойство пересчитается когда происходит изменение в свойстве из обьекта Data
  computed: {
    sortedMyList(){
      return this.allgoods.sort((b1, b2)=>b2.count - b1.count);
    },
    backcolor(){
      if(this.allgoods.count == 0){
        return zero
      }
    }
  }
});

app.mount("#app");