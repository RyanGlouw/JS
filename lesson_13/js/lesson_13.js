'use strict'

let books = [
  {
    title: "Колобок",
    description: "Сказка, знакомая каждому взрослому, придется по душе и маленьким детям. " +
      "Они быстро учат простые слова песенки Колобка и с удовольствием подпевают родителям.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Репка",
    description: "Репка — русская народная сказка, которая знакома каждому ребенку с малых лет. " +
      "«Репка» имеет цепочные действия, ясные даже малышу, поэтому можно читать сказку с раннего возраста.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Три медведя",
    description: "Народная сказка с английскими корнями, знакомая каждая ребёнку с детства. " +
      "В ней говорится о приключениях девочки, которая пошла в лес, заблудилась и набрела на дом трёх медведей.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Красная шапочка",
    description: "В ней показана жизнь простой девочки, Красной Шапочки. " +
      "Однажды ее бабушка заболела, и внучка отправилась ее навестить по наказу матери.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
];
let app = Vue.createApp({
  data() {
    return {
      tabs: ["Все книги", "Мой список"],
      currentTab: "Все книги",
      allbooks: books,
      myList: []
    }
  },

  // все методы которые должны сработать при наступлении событий описывается в обьекте methods

  methods: {
    addToMyList(allbook) {
      allbook.inList = true
      allbook.date = new Date();
      this.myList.push(allbook)
    },
    deleteFromMyList(book, i) {
      book.inList = false
      this.myList.splice(i,1);
    }
  },

  // вычисяемое свойство пересчитается когда происходит изменение в свойстве из обьекта Data
  computed: {
    sortedMyList(){
      return this.myList.sort((b1, b2)=>b1.date.getTime() - b1.date.getTime());
    }
  }
});

app.mount("#app");

