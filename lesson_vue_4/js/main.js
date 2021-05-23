'use strict';

// Локальная регистрация компонентов
// Формируем объект компонента + template

let TabDrinks = {
    template: `<div>
            <h2>Содержимое вкладки {{title}}</h2>
              </div>`,
    props: {title: String}
};
let TabDeserts = {
    template: `<div>
            <h2>Содержимое вкладки десерты</h2>
              </div>`
};
let TabSalads = {
    template: `<div>
            <h2>Содержимое вкладки салаты</h2>
              </div>`,
    props: {
        title: {
            required: false,
            default: "Вкладка",
        }
    }
};


// components: {} - говорим что в данном компоненты
// мы хотим использовать другие компоненты

let app = Vue.createApp({
    data(){
        return{
            tabs: [
                {name: "Напитки", en: "drinks"},
                {name: "Десерты", en: "deserts"},
                {name: "Салаты", en: "salads"},
            ],
            currentTab: {name: "Напитки", en: "drinks"}
        }
    },

    components: {TabDrinks, TabDeserts, TabSalads},
    computed: {
        tabName() {
            return `tab-${this.currentTab.en}`;
        }
    }
});

app.mount("#app");

// Глобальная регистрация компонентов
// Компоненты зарегистрированные глобально, доступны
// всем остальным компонентам приложения
// {} - описывает объект компонента

// app.component('tab-drinks', {template: `<div>
//             <h2>Содержимое вкладки напитки</h2>
//                                         </div>`});
//
// app.component('tab-deserts', {template: `<div>
//             <h2>Содержимое вкладки десерты</h2>
//                                         </div>`});
// app.component('tab-salads', {template: `<div>
//             <h2>Содержимое вкладки салаты</h2>
//                                         </div>`});
//


// У каждого компонента template,
// свой data, свои вычисляемые свойства, свои методы.
// Родительские компоненты могут передавать данные дочерним компонентам.
// После template мы описываем data для каждого отдельного компонента