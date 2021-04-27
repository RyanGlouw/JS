'use strict';

let form = document.forms.lesson; // все формы в документе
console.log(form);

// доступ к элементам формы по значению атрибута name
// form.elements - все элементы формы
// login - значение атрибута name нужного элемента формы
let loginInput = form.elements.login 
console.log(loginInput);
console.log(loginInput.value);
loginInput.value = 'qwerty';

let passwordInput = form.elements.pwd;
console.log(passwordInput);

let colorRadios =  form.elements.color; // если элемент с таким значением 1 то получаем 1 паполь а если несколько то получаем коллецию

for(let radio of colorRadios) {
    radio.addEventListener("focus", changeColor); // если не работает то focus менять на click
}

function changeColor(){
    form.elements.checkbox_fieldset.style.background = this.value; 

}

// name="lang[]";
let langCheckBoxes = form.elements["lang[]"];

for (let checkBox of langCheckBoxes){ // у checkbox ов есть атрибут check(он автоматически появляется после клика), если чек бокс или радио кнопка отмечены то значение у чекбоксов  и радио кнопок будет тру
    if(checkBox.checked) console.log(checkBox.value);
}

let select = form.elements.countries;
for (let option of select) {
    if(option.selected) console.log(option.value);
}

//события - отправка формы
form.addEventListener("submit", submitForm); // когда нажимают на кпопку submit,у формы срабатывает submit событие НЕ У КНОПКИ А У ФОРМЫ, по умолчанию у submit есть обработчик и он сам отправляет данные на сервер,
// что бы отменить событие по умолчанию, мы обращаемся к обьекту события и вызываем метод preventDefault и данные на сервер по умолчанию не уйдут
function submitForm(event) {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);
}