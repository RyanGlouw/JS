function Unit(unitName) { // функция конструктор
    this._name = unitName;
    this._attack = 3;
    this._health = 10;

    let privateField = 'private';

    this.getPrivateField = function (){
        return privateField;
    }
}
Unit.prototype.isAlive = function(){
    return this._health > 0;
};
Unit.prototype.attackOther = function(otherUnit){
    if (!(otherUnit instanceof Unit)){
        throw new Error("otherUnit должен быть типа Unit")
    }
    otherUnit._health -= this._attack;
};

let unit1 = new Unit('Пехотинец #1');
unit1.isAlive();
let unit2 = new Unit('Пехотинец #2');
unit2.isAlive();
console.log(unit1, unit2);

// наследование
function Knight(unitName, addAttack) {
    Unit.call(this, unitName); // call это метод функции
    this._addAttack = addAttack;
}

// наследование прототипа
Knight.prototype = Object.create(Unit.prototype); // в прототип
// к рыцарю устанавливаем ссылку на прототип юнита -род класс
// если дочернему классу нужно будет доб уникальные методы то их нужно будет записывать в прототип
Knight.prototype.constructor = Knight;

Knight.prototype.attackOther = function (otherUnit) {
    // вызов метода родителя:
    Unit.prototype.attackOther.call(this, otherUnit);
};

let knight = new Knight('Рыцарь', 2);
knight.attackOther(unit1);
console.log(knight);
console.log(knight.isAlive());

// Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.

// Цепочка прототипов - объект-прототип выступает как шаблон, от от него объект наследует методы и свойства.
// Прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее.
