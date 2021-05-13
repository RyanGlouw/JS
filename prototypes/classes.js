class Unit {
    constructor(unitName) {
        this._name = unitName;
        this._attack = 3;
        this._health = 10;
    }

    isAlive(){
        return this._health > 0;
    }

    attackOther(otherUnit) {
        if (!(otherUnit instanceof Unit)){
            throw new Error("otherUnit должен быть типа Unit")
        }
        otherUnit._health -= this._attack;
    }
}

class Knight extends Unit {

    constructor(unitName, addAttack) {
        super(unitName); // вызов конструктора родителя - вызывать надо только из за constructor
        this._addAttack = addAttack;
    }

    attackOther(otherUnit) {
        super.attackOther(otherUnit);
        if (otherUnit.isAlive()) {
            otherUnit._health -= this._addAttack;
        }
    }
}

// если в дочернем классе мы пишем метод как у родителя но с др функциями переопределение метода
// super это обращение к родителю
// proto это геттер и сеттер для прототипов
// прототипом всех обьектов является object, функции в js тоже является обьектами
// если мы создаем строчку ЧИСЛО через new то это создание обьекта
// прототип это ссылка на ОБЬЕКТ  str(обьект) -> String(прототип) -> Object - цепочка прототипов
// если мы создаем метод внутри функции конструктор то этот метод дублируется во всех создаваемых обьектов
// если мы записываем метод в прототип конструктора то такой метод не дублируется у создаваемых обьектов
