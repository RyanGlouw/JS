class Slider {
    constructor() { // конструктор не обязательно принимает аргументы
        this._slider = document.querySelectorAll(".slide");
        this._dots = [...document.querySelectorAll(".dot")]; // получение html коллекции .dot, что бы переложить элементы коллекции в массив 
        this._previousBtn = document.querySelector(".previous");
        this._nextBtn = document.querySelector(".next");
        this._currentIndex = 0;
        this._addListener();
    }

    _addListener() { // если есть _ то этот метод можно вызывать только внутри класса
        this._previousBtn.addEventListener("click", this._showPrevious.bind(this));
        this._nextBtn.addEventListener("click", this._showNext.bind(this));
        // for (let dot of this._dots){
        //     dot.addEventListener("click", this._showByDot); аналог for -а forEach
        // }
        // this._dots.forEach(dot => dot.addEventListener("click", this._showByDit)); // forEach с html коллекцией не работает (только если коллекции переложить в массив  this._dots = [...document.querySelectorAll(".dot")];)
    }
    // _currentIndex = 0;
    // [slide1,slide2,slide3];
    _showPrevious() {
        this._hideSlider();
        this._currentIndex = this._currentIndex === 0 ? this._slider.length - 1 : this._currentIndex - 1
        this._showSlide();
    }

    // _currentIndex = 3;
    // [slide1,slide2,slide3];
    _showNext() {
        this._hideSlider();
        this._currentIndex = this._currentIndex === (this._slider.length - 1) ? 0 : this._currentIndex + 1;
        this._showSlide();
    }

    _showSlide() {
        this._slider[this._currentIndex].classList.add("active");
        this._dots[this._currentIndex].classList.add("active");
    }

    _hideSlider() {
        this._slider[this._currentIndex].classList.remove("active");
        this._dots[this._currentIndex].classList.remove("active");
    }
}

let slider = new Slider();