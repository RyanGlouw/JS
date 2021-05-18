let cats = [
  {
    name: "Люся",
    age: "1 год",
    color: "трехцветная",
    img: "https://picsum.photos/200/300?random=1"
  },
  {
    name: "Том",
    age: "3 месяца",
    color: "белый",
    img: "https://picsum.photos/200/300?random=2"
  },
  {
    name: "Макс",
    age: 2,
    color: "серый",
    img: "https://picsum.photos/200/300?random=3"
  },
  {
    name: "Василий",
    age: 3,
    color: "черный",
    img: "https://picsum.photos/200/300?random=4"
  }
];

let app = Vue.createApp({
  data() {
    return {
      cats: cats
    };
  }
});

let vm = app.mount("#app");