'use strict';

let loginForm = document.forms['login-form']  // получение всех форм а потом по name 
let pwdIcon = document.getElementById("password-icon");
pwdIcon.addEventListener('click', function () {
    if (this.innerText === 'visibility_off') {
        this.innerText = 'visibility'
        loginForm.elements.password.setAttribute('type', 'text');
    } else {
        this.innerText = 'visibility_off';
        loginForm.elements.password.setAttribute('type', 'password');
    }
});  // скрипт для скрытия и открытия пароль и картинки глаза


let loginRules = {

    elem: loginForm.elements.login,
    minLength: 6,
    errorField: document.getElementById("login-error")
};


let pwdRules = {
    elem: loginForm.elements.password,
    minLength: 10,
    errorField: document.getElementById("password-error")
};

function checkMinLen(rule) { }
let validator = {
    // checkMinLen: function (rule) {}

    checkMinLen(rule) {
        if (rule.elem.value.length < rule.minLength) {
            rule.errorField.innerText = `Минимальное количество символов ${rule.minLength}`;
            return false;
        }
        rule.errorField.innerText = "";
        return true;
    }
}

loginForm.elements.login.addEventListener("keyup", validator.checkMinLen.bind(null, loginRules)); // что бы передать параметры после имени метода ставим точку и вызываем метод bind,
// первом аргументом принимаем контектст (this) остальные аргументы это те которые принимает сама функция

loginForm.elements.password.addEventListener("keyup", validator.checkMinLen.bind(null, pwdRules));

// submit
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validator.checkMinLen(loginForm) || !validator.checkMinLen(pwdRules)) {
        console.login('Данные нельзя отправить на сервер');
    } else {
        console.login('Данные можно отправить на сервер');
        //1 loginForm(); - отправка данных с перезагрузкой страницы
        //2 отправка аякс запросом без перезагрузки
    }
})
