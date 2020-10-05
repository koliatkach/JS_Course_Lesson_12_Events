/*
1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). При натисканні alt + A,
замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. Далі коли ви натисните shift + S
дані збережуться і знов будуть відображатись як span. */

let task1Div = document.getElementById('task_1');

let task1Span = document.getElementById('task_1_span');
document.addEventListener('keydown',function (event) {
    if (event.altKey && event.code == 'KeyA') {
        task1Span.remove();
        let inputTask1 = document.createElement('input');
        task1Span = inputTask1;
        task1Div.appendChild(inputTask1);
    }
})


/*
2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію,
 при більшому розмірі сторінки - що ми використовуємо десктоп версію.*/

window.addEventListener('resize',function (event){
    if (innerWidth < 600) {
        console.log('Mobile Version');
    }
    else {
        console.log('Desktop Version');
    }
})


/*
3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.*/

let task3input = document.getElementById('task_3_input');
task3input.addEventListener('keydown',function (event){
    let inputValue = task3input.value;
    if (event.code == 'Enter') {
        console.log(inputValue);
    }
})

/*4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.*/

let myModalTask4 = document.getElementById('my_modal_task_4');

document.addEventListener('keydown',function (event){
    if (event.altKey && event.code == 'KeyO') {
        myModalTask4.style.display = 'block';
    }
    if (event.altKey && event.code =='KeyC') {
        myModalTask4.style.display = 'none';
    }
})


/*
5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі екрану
(центрування елемента). В модальному вікні має бути текст та кнопка закрити.*/

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
