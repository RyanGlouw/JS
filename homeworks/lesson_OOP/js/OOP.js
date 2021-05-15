
// Задача "Сад":
// Реализовать объектную модель Яблоко Дерево Сад.
// Свойства яблок: цвет, возраст (изначальный возраст задается рандомно: от 1 до 20), на дереве(или нет), испорчено(или нет).
// Свойства деревьев: максимальное количество яблок, яблоки на дереве.
// Свойства сада: возраст, максимальное количество деревьев, деревья в саду.
// У сада должен быть реализован метод passDay. Когда проходит один день (один вызов метода passDay),
// возраст сада увеличивается на 1 день, возраст яблок увеличивается а 1 день. При возрасте яблок - 30 дней,
// яблоко падает с дерева, на следующий день оно портится.
// Каждые 30 суток на каждом дереве появляется по 1 яблоку. Количество яблок на дереве не может быть выше максимально возможного.

// У сада должен быть переопределен метод toString, который возвращает строку с информацией о количестве деревьев в саду и
// количестве яблок на каждом дереве.

class Apple {
  constructor(color, age, isOnTree, spoiled) {
    this.color = color;
    this.age = age;
    this.isOnTree = isOnTree;
    this.spoiled = spoiled;
    
  }
  
}

class Tree {
  constructor(MaxApples) {
    this.MaxApples = MaxApples;
    this.apples = [];
      
    for(let i = 0; i < this.MaxApples; i++){
      this.apples.push(new Apple('red',10,true,false))
    }
    }
  }
  

class Garden {
  constructor(age){
    this.age = age;
    this._maxTrees = 10;
    this._numTrees = [];

    for(let i = 0; i < this._maxTrees; i++){
      this._numTrees.push(new Tree(10))
    }

  }

  passDay(age){
     this.age = age + 1;
    }

}

let garden = new Garden(10);
console.log(garden);


